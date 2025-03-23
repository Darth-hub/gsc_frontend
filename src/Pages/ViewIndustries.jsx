import { IconPencil, IconTrash } from '@tabler/icons-react';
import IndustryCard from '../../Components/IndustryCard.jsx'
import MultiMap from '../../Components/MultiMap.jsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState, useContext} from 'react';
import { Title } from '@mantine/core';
import { DataContext } from '../Context/DataContext.jsx';


const ViewIndustries = () => {
    const { Industrydata } = useContext(DataContext) 
    console.log(Industrydata)

    const [data, setData] = useState(Industrydata)
    const [locations, setLocations] = useState([])

    useEffect(() => {
      const array = []
      data.forEach(industy => {
        array.push(industy.industry_location)
      }) 
      setLocations(array)
    },[data])

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
  return (
    <div>
        <div class="Blog w-full mb-[50px] h-[100vh]">
            <div className='text-center text-white text-5xl pt-8 mb-10'>
                <Title>Our Industrial Partners</Title>
            </div>

            <div className='w-[70vw] mt-10 ml-[5vw]'>
              <MultiMap locations={locations}/>
            </div>
            <div className='text-white text-xl pl-10 pt-10 ml-[1vw]'></div>

            <div className='w-[87vw] bg-green-700 ml-[5vw] mr-[5vw] h-fit overflow-y-auto scrollbar-hide p-[2vw] rounded-md'>
              <div className="p-[1vw] text-white bg-zinc-900 backdrop-blur-lg text-xl mb-4 rounded md">Selling Options</div>
              <div className='overflow-x-auto rounded-md overflow-y-hidden flex scrollbar-hide'>
                      {data.map((industry) => (
                          <IndustryCard key={industry.id} 
                              data-key={industry.id}
                              id={industry.id}
                              name={industry.industry_name}
                              description={industry.industry_description}
                              location={industry.industry_location}
                              image={industry.industry_image}
                          />
                      ))}
              </div>
            </div>



        </div> 


    </div>
  )
}

export default ViewIndustries