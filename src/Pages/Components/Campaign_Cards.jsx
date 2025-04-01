import React, { useContext } from 'react';
import "./Component.css";
import { CampaignContext } from './Campaign_context';

const Campaign_Cards = () => {
  const { campaigns } = useContext(CampaignContext);

  return (
    <div className="flex flex-nowrap gap-5 justify-center">
      {campaigns.map((campaign) => (
        <div key={campaign.id} className="campaignCard flex-col py-5 px-5 gap-5 w-[22%]  h-[90%] text-white">
          <div className='w-[90%]'>
            <img src={campaign.img} alt={campaign.name} className='rounded-[10px] w-full' />
          </div>
          <div>
            <h1 className='text-xl'>{campaign.name}</h1>
          </div>

          <div>
            <p>{campaign.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Campaign_Cards;
