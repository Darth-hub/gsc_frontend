import React from 'react';
import logo from './images/BIG_LOGO.png';
import Header from './Header';
import { HashLink as Link } from "react-router-hash-link";
import { useAuth } from '../src/Context/AuthContext';
import { Loader } from '@mantine/core';

const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <div className='flex items-center gap-20 justify-between'>
        <div>
          <Header />
        </div>
        <div>
          <Link smooth to="/login">
            <button className="button px-3 py-1 mr-10 rounded-lg mt-6">
              <p className="text">login/sign up</p>
            </button>
          </Link>
        </div>
      </div>
      <div className='flex gap-35 mt-8 text-white'>
        <div className='flex flex-col w-[35vw] ml-40 mt-14'>
          <div>
            <h1 className='text-[7em]' id='company'>ECLYRA</h1>
            <p className='text-[1.2em] relative bottom-8.5 left-2'>♻️ Sustainable Living, Simplified.</p>
            <p>At ECLYRA, we simplify waste management by connecting you with reliable recycling solutions. Dispose of e-waste, plastics, metals, and paper responsibly—reducing pollution for a greener future. .</p>

          </div>
          
          {user.role === 'Seller' ? (
            <Link smooth to='/schedulepickup'>
              <button className='button rounded-xl mt-15 py-3 self-end mr-5 w-[60%]'>
                Schedule Pickup Now
              </button>
            </Link>
          ) : (
            <div>
              <Link smooth to='/viewPickUps'>
                <button className='button rounded-xl mt-15 py-3 self-end mr-5 w-[60%]'>
                  PickUps
                </button>
              </Link>
              <Link smooth to='/viewindustries'>
                <button className='button rounded-xl mt-15 py-3 self-end mr-5 w-[60%]'>
                  Sell To Industries
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className='relative flex justify-center items-center aspect-square'>
          <img src={logo} className='h-[75vh]' alt="ECLYRA Logo" />
        </div>
      </div>
    </>
  );
};

export default Home;