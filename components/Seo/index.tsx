import React from 'react';
import Head from 'next/head';

type SeoProps = {
    title?: string;
    description?: string;
    canonical?: string;
    css?: string;
    js?: string;
    image?: any;
    siteName?:string
  };

const Seo:React.FC<SeoProps> = (props) => {
    const {title, description, siteName, image} = props
    return (
        <Head>
             <title key='title' >{title}</title>
    <meta key='description' name="description" content={description} />
    <meta key="og:type" property="og:type" content="website" />
    <meta key="og:title" name="og:title" property="og:title" content={title} />
    <meta
      name="og:description"
      property="og:description"
      content={description}
      key="og:description"
    />
    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
    <meta property="og:site_name" key="og:site_name" content={siteName} />
    <meta name='mobile-web-app-capable' content='yes' />
    <meta property="og:image" key="og:image" content={`${image}`} />
        </Head>
    )
}



export default Seo