import { Client } from "twitter-api-sdk";

export const twitterClient = new Client(process.env.TWITTER_BEARER_TOKEN ?? "");
export async function getTweetList() {
  const user = await twitterClient.users.findUserByUsername("kyoichi_1", {
    "user.fields": ["profile_image_url"],
  });

  if (!user.data?.id) {
    return;
  }
  const tweetlist = await twitterClient.tweets.usersIdTweets(user.data.id);
  return { user, tweetlist };
}
