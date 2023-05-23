import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import photo from '../../resources/Photos/Rectangle 1.png'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleToDate = event=>{
        setStartDate(event.target.value)
    }
    return (
        <div>
        <div className="relative">
          <img
            src={photo}
            className="absolute inset-0 object-cover w-full h-screen bg-gradient-to-tl"
            alt=""
          />
          <div className="relative bg-gray-900 bg-opacity-60 h-screen">
            {/* Nav bar */}
  
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
                </div>
                <div className="w-full max-w-xl xl:px-8 xl:w-9/12 place-items-center">
                  {/* From */}
  
                  <form className="hero lg:mt-48">
                    <div className="hero-content flex-col lg:flex-row-revers">
                      <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
  
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Ride On Place</span>
                            </label>
                            <select name='country' className="input input-bordered text-white">
                            <option>--Select Destination--</option>
                            <option>Dhaka</option>
                            <option>Cox Bazar</option>
                            <option>Shylet</option>
                            <option>Rajshahi</option>
                            <option>Rangamati</option>
                            <option>Banderban</option>
                            </select>
                            
                            {/* <input
                              type="text"
                              placeholder="email"
                              className="input input-bordered"
                            /> */}
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Ride On Place</span>
                            </label>
                            <select name='country' className="input input-bordered text-white">
                            <option>--Select Destination--</option>
                            <option>Dhaka</option>
                            <option>Cox Bazar</option>
                            <option>Shylet</option>
                            <option>Rajshahi</option>
                            <option>Rangamati</option>
                            <option>Banderban</option>
                            </select>
                            
  
                            {/* Date */}
  
                            <div className="flex">
                              <div className="form-control w-40 me-4 text-purple-500">
                                <label className="label">
                                  <span className="label-text">From</span>
                                </label>
                                <input
                                onChange={handleToDate}
                                  type="date"
                                  placeholder="email"
                                  className="input input-bordered"
                                />
                              </div>
                              <div className="form-control w-40 text-purple-500">
                                <label className="label">
                                  <span className="label-text">To</span>
                                </label>
                                <input
                                  type="date"
                                  placeholder="email"
                                  className="input input-bordered"
                                />  
                              </div>
                            </div>
  
                            {/* Date finsih */}
                          </div>
                          <Link to='/booking-info'>
                          <div className="form-control mt-6">
                            <button className="btn bg-yellow-300 text-black text-lg">Booking</button>
                          </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Booking;