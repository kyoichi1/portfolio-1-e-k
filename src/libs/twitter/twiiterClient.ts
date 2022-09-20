import { Client } from "twitter-api-sdk";

export const twitterClient = new Client(process.env.TWITTER_BEARER_TOKEN ?? "");
export async function getTweetList() {
  const user = await twitterClient.users.findUserByUsername("kyoichi_1", {
    "user.fields": ["profile_image_url"],
  });

  if (!user.data?.id) {
    return;
  }
  const tweetlist = await twitterClient.tweets.usersIdTweets(user.data.id, {
    expansions: ["author_id"],
    "tweet.fields": ["author_id", "created_at"],
    "user.fields": ["name", "profile_image_url", "username"],
  });

  // if (tweetlist.data) {
  //   // console.log(tweetlist.data[0].created_at);
  //   // console.log(tweetlist.data[0]);
  //   // console.log(user.data?.profile_image_url);
  //   // console.log(tweetlist.includes.users[0].profile_image_url);
  // }

  return { user, tweetlist };
}
