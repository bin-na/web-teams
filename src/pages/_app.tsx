import '../../styles/globals.css';
import type { AppProps } from 'next/app';

function TeamApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default TeamApp;
