import React from 'react';
import { Link } from 'react-router-dom';
import HomePhoto from '../../resources/Photos/Rectangle 1.png';
import SliderPlaces from '../SliderPlaces/SliderPlaces';
import './Home.css'

const Home = () => {
    return (
        <div className="relative ">
      <img
        src={HomePhoto}
        className="absolute inset-0 object-cover sm:w-76 w-full h-screen bg-gradient-to-tl md:h-screen "
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-60 h-screen">
        {/* Nav bar */}

        <div className="px-4 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-3/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The quick, brown fox <br className="hidden md:block" />
                jumps over a{" "}
                <span className="text-teal-accent-400">lazy dog</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
              <Link to='/booking'
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                
                  <button className="btn bg-yellow-300 text-black text-lg">
                    Booking..
                  </button>
                
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-9/12 place-items-center">
              <SliderPlaces></SliderPlaces>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Home;