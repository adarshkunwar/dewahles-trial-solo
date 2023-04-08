import React from "react";
import Page from "../../components/UI/Page";

const Home = () => {
  return (
    <Page>
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col gap-5 items-center">
          <div className="text-white text-5xl font-bold selection:bg-orange-500">
            DeWhales
          </div>
          <div className="text-white text-xl selection:bg-orange-300">
            DeWhales is the semi-generative NFT project of 444 Whales deployed
            on DeSo Blockchain.
          </div>
          <div className="border-2 border-orange-400 w-96 aspect-square">
            place holder for an nft image or video
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Home;
