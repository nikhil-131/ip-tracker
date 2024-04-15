import React from 'react'
import arrow from "../assets/images/arrow.svg"
import location from "../assets/images/location.svg"
import desktop from "../assets/images/desktop.png"
import mobile from "../assets/images/mobile.png"

const IPComponent = ({ipTracker}) => {

    return (
        <div className="header h-80 relative">
            <div className="headerImg">
                {/* <img className='w-full h-[40vh] absolute top-0 left-0 right-0 z-[-1]' src={desktop} alt="" /> */}
                <picture>
                    <source srcSet={mobile} media="(max-width: 768px)" />
                    <img className='w-full h-80 absolute top-0 left-0 right-0 z-[-1] object-cover' src={desktop} alt="" />
                </picture>
            </div>
            <div className="ipAddress flex flex-col justify-center items-center gap-[1.5rem] pt-6">
                <h1 className='text-white text-3xl font-semibold'>IP Address Tracker</h1>
                <label htmlFor="ip" className='relative'>
                    <input className='w-[35vw] py-4 px-4 rounded-xl text-lg' type="text" id='ip' name='ipAddress' placeholder='Search for any IP address or domain' />
                    <div className="arrow">
                        <button onClick={handleClick} className='absolute right-0 top-0 px-6 rounded-r-xl bg-black py-[23px] outline-none'><img className='outline-none' src={arrow} alt="arrow key" /></button>
                    </div>
                </label>
            </div>
            <div className="ipDetails w-[80vw] min-h-40 bg-white mt-6 mx-auto p-8 rounded-xl flex gap-8 absolute bottom-[-25%] left-0 right-0 z-10">
                <div className="ip-address w-[25%]  border-r-[1px] border-slate-400 text-gray-400 font-semibold">
                    <h4 className='tracking-[0.15rem]  text-xs'>IP ADDRESS</h4>
                    <p className='text-black text-3xl py-2'>{ipTracker.ip}</p>
                    {/* <p className='text-black text-3xl py-2'>ip</p> */}
                </div>

                <div className="location w-[25%]  border-r-[1px] border-slate-400 text-gray-400 font-semibold">
                    <h4 className='tracking-[0.15rem]  text-xs'>LOCATION</h4>
                    <p className='text-black text-3xl py-2'>{ipTracker.location.city}, {ipTracker.location.region}, {ipTracker.location.country}</p>
                    {/* <p className='text-black text-3xl py-2'>city, region, country</p> */}
                </div>

                <div className="timezone w-[25%]  border-r-[1px] border-slate-400 text-gray-400 font-semibold">
                    <h4 className='tracking-[0.15rem]  text-xs'>TIMEZONE</h4>
                    <p className='text-black text-3xl py-2'>UTC {ipTracker.location.timezone}</p>
                    {/* <p className='text-black text-3xl py-2'>UTC timezone</p> */}
                </div>

                <div className="isp w-[25%]  text-gray-400 font-semibold">
                    <h4 className='tracking-[0.15rem]  text-xs'>ISP</h4>
                    <p className='text-black text-3xl py-2'>{ipTracker.isp}</p>
                    {/* <p className='text-black text-3xl py-2'>isp</p> */}
                </div>
            </div>
        </div>
    )
}

export default IPComponent
