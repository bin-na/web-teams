import React from 'react';
import Head from 'next/head';

export interface Props {
  title: string;
  children?: React.ReactNode;
}

export const Layout = (props: Props): React.ReactElement => (
  <div className='bgs'>
    <Head>
      <title>{props.title}</title>
      <meta name="description" content="web teams" />
      <link rel="icon" href="/logo.jpg" />
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
    </Head>
    
    {props.children}
  </div>
);
