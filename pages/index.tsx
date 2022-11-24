import MetaTags from "../components/MetaTags";
import { notionClient } from "../utils/client";
import { GetServerSideProps } from "next";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { SocialIcon } from "react-social-icons";

export default function Home({ links }: { links: PageObjectResponse[] }) {
  return (
    <>
      <MetaTags title="Neesh's Links" description="Neesh's Links" />
      <div className="h-screen w-screen flex justify-center px-10 md:px-8 lg:px-4 xl:px-0 bg-gradient bg-gradient-to-br from-gradient-orange via-gradient-pink to-gradient-blue animate-gradient">
        <div className="flex flex-col pt-[20%] md:p-0 md:justify-center gap-8 w-full md:items-center">
          <div className="flex flex-col justify-center gap-4 w-full md:w-96">
            {links.map((link, i) => (
              <a
                key={i}
                className="w-full py-1 pl-2 pr-4 border-2 border-zinc-300/20 hover:border-zinc-200 backdrop-blur-lg bg-white/10 hover:bg-white/30 transition-all duration-100 rounded-md hover:translate-x-4 hover:-translate-y-2 group"
                // @ts-ignore
                href={link.properties["URL"].url}
              >
                <div className="flex flex-col justify-between">
                  <span className="text-amber-300 font-bold text-2xl">
                    {/* @ts-ignore */}
                    {link.properties.Name.title[0].plain_text}
                  </span>
                  <span className="text-md text-white/40 group-hover:text-white/70 transition-all duration-100">
                    {/* @ts-ignore */}
                    {new URL(link.properties["URL"].url).hostname}
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="flex flex-row gap-2 md:gap-4 w-full md:w-auto">
            <SocialIcon
              url="https://twitter.com/Neesh774"
              className="!w-8 !h-8 md:!w-12 md:!h-12 hover:-translate-y-2 transition-all duration-100"
              bgColor="#fcd34d"
            />
            <SocialIcon
              url="https://tiktok.com/@cheesyneesh"
              className="!w-8 !h-8 md:!w-12 md:!h-12 hover:-translate-y-2 transition-all duration-100"
              bgColor="#fcd34d"
            />
            <SocialIcon
              url="https://discord.com/users/297504183282565130"
              className="!w-8 !h-8 md:!w-12 md:!h-12 hover:-translate-y-2 transition-all duration-100"
              bgColor="#fcd34d"
            />
            <SocialIcon
              url="https://"
              className="!w-8 !h-8 md:!w-12 md:!h-12 hover:-translate-y-2 transition-all duration-100"
              bgColor="#fcd34d"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const database = await notionClient.databases.query({
    database_id: process.env.NOTION_DB_ID as string,
  });

  return {
    props: {
      links: database.results,
    },
  };
};
