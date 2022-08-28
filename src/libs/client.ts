import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "kyoichi-it-blog",
   // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  // apiKey: "process.env.NEXT_PUBLIC_API_KEY",

  //これでvercleのデプロは成功
  apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,

  //これでlocal3000もデプロイもOK
  // apiKey: `${process.env.API_KEY}`,

  // apiKey: process.env.API_KEY,
  // apiKey: `${process.env.API_KEY}`,
  // apiKey: process.env.API_KEY,

});

