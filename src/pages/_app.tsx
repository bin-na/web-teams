import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
function TeamApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default TeamApp;
