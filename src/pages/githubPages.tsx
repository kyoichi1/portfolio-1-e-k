import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const GithubPages = ({ pinnedItems }) => {
  return (
    <div className="">
      {pinnedItems.map((item) => {
        return (
          <a key={item.id} href={item.url}>
            <h2>{item.name}</h2>
            <h2>{item.description}</h2>
            {item.languages.edges.map((language) => {
              return (
                <div key={language.node.name} className>
                  <p>{language.node.name}</p>
                  <p>{language.node.color}</p>
                </div>
              );
            })}
            <p>🍴{item.forkCount}</p>
            <p>⭐ {item.stargazerCount}</p>
          </a>
        );
      })}
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

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "kyoichi1") {
          pinnedItems(first: 6, types: [REPOSITORY]) {
            totalCount
            edges {
              node {
                ... on Repository {
                  name
                  description
                  id
                  url
                  languages(first: 10) {
                    edges {
                      node {
                        color
                        name
                      }
                    }
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

  // languages(first: 10) {
  //   edges {
  //     node {
  //       id
  //       color
  //       name
  //     }
  //     size
  //   }
  // }
  // forks {
  //   totalCount
  // }
  // description
  // stargazerCount

  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map((edge) => edge.node);

  return {
    props: {
      pinnedItems,
    },
  };
}

export default GithubPages;
