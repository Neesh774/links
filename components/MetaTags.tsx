import Head from "next/head";

const MetaTags = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://links.ilioslabs.dev" />
      <meta property="og:site_name" content="Neesh's Links" />
      <meta property="og:image" content="/banner.png" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@Neesh774" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔗</text></svg>"
      />
    </Head>
  );
};

export default MetaTags;
