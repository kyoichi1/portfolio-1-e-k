import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const microcmsClient = createClient({
  serviceDomain: "kyoichi-it-blog",
  // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: process.env.MICROCMS_API_KEY,
});
