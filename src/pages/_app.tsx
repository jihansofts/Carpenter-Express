import "@/styles/globals.css"; // Adjust if styles folder is elsewhere

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
