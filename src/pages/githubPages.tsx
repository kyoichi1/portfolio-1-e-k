import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Progress } from "@mantine/core";
import { valueFromAST } from "graphql";
import { NextPage } from "next";
import { BiGitRepoForked } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";

export type Props = {
  user: {
    pinnedItems: {
      edges: {
        node: {
          name: string;
          description: string;
          id: string;
          url: string;
          languages: {
            edges: {
              node: {
                color: string;
                name: string;
                id: string;
              };
              size: number;
            };
            totalSize: number;
            totalCount: number;
          };
          stargazerCount: number;
          forkCount: number;
        };
      };
    };
  };
};

const GithubPages: NextPage = ({ pinnedItems }) => {
  return (
    <div className="mx-4 mt-10 w-96 ">
      <div className="my-4 text-3xl font-bold ">GitHub</div>
      <div className="border-t-2"></div>
      <div className="">
        {pinnedItems.map((item) => {
          return (
            <a key={item.id} href={item.url} className="mt-10 h-36">
              <div className="mt-4 mb-6 font-['YuGothic'] text-[18px] font-bold text-gray-700">
                <h2>{item.name}</h2>
              </div>
              <div className=" h-6 items-center text-clip font-['YuGothic'] font-light  text-gray-500 ">
                <h2 className="mt-2 overflow-hidden text-ellipsis">
                  {item.description}
                </h2>
              </div>
              <div className="flex h-9 items-center font-bold text-gray-400 ">
                <FaRegStar />
                <div className="m-2 mr-6 text-xs">{item.stargazerCount}</div>
                <BiGitRepoForked />
                <div className="m-2 text-xs">{item.forkCount}</div>
              </div>
              <Progress
                sections={item.languages.edges.map((edge) => {
                  return {
                    value: (edge.size / item.languages.totalSize) * 100,
                    color: edge.node.color,
                  };
                })}
                my={6}
              />
              <div className=" flex ">
                {item.languages.edges.map((language) => {
                  const lang1 = (
                    (language.size / item.languages.totalSize) *
                    100
                  ).toFixed(1);

                  return (
                    <div key={language.node.id}>
                      <div className="mr-4 mt-4 flex  justify-between text-ellipsis">
                        <div className="flex h-4 items-center text-xs font-bold">
                          <div
                            className="h-2 w-2 rounded-full "
                            style={{ backgroundColor: language.node.color }}
                          ></div>
                          <p className="ml-3">{language.node.name}</p>
                          <p className="ml-2 text-gray-400">{lang1}%</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "kyoichi1") {
          pinnedItems(first: 6, types: [REPOSITORY]) {
            edges {
              node {
                ... on Repository {
                  name
                  description
                  id
                  url
                  languages(
                    first: 3
                    orderBy: { direction: DESC, field: SIZE }
                  ) {
                    edges {
                      node {
                        color
                        name
                        id
                      }
                      size
                    }
                    totalSize
                    totalCount
                  }
                  stargazerCount
                  forkCount
                }
              }
            }
          }
        }
      }
    `,
  });

  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map((edge) => edge.node);

  return {
    props: {
      pinnedItems,
    },
  };
}

export default GithubPages;
