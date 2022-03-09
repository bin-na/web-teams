import React from 'react';
import Head from 'next/head';

export interface Props {
  title: string;
  children?: React.ReactNode;
}

export const Layout = (props: Props): React.ReactElement => (
  <>
    <Head>
      <title>{props.title}</title>
      <meta name="description" content="web teams" />
      <link rel="icon" href="/logo.jpg" />
    </Head>
    {props.children}
  </>
);
