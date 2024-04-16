import { useState, useEffect } from 'react'
import './App.css'
import arrow from "./assets/images/arrow.svg"
import location from "./assets/images/location.svg"
import desktop from "./assets/images/desktop.png"
import mobile from "./assets/images/mobile.png"
import MapComponent from './components/MapComponent'
// import MapComponent2 from './components/MapComponent2'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import IPComponent from './components/IPComponent'
import axios from 'axios';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(null);
  const [ipTracker, setIpTracker] = useState(0);
  const [error, setError] = useState(null);
  const [ipAddress, setIpAddress] = useState('');
  const [userIPAddress, setUserIPAddress] = useState('');
  const [ipComplete, setIpComplete] = useState(null);

  const handleClick = async (event) => {
    let ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if(ipPattern.test(ipAddress)) {
      let a = await fetch(`https://ip-tracker-server.vercel.app/`, { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({userIP: userIPAddress})});
      let r = await a.json();
      setIpTracker(r);
      console.log(ipTracker);
    }
  }

  const handleChange = (event) => {
    setUserIPAddress(event.target.value);
  }

  // useEffect(() => {
  //   // alert("first");
  //   (async () => {
  //     const response = await axios.get("https://api.ipify.org?format=json");
  //     setIpAddress(response.data.ip);
  //     console.log(response.data.ip);
  //     setIpComplete(true);
  //   })();
  // }, []);

  useEffect(() => {
    // alert("second");
    const fetchData = async () => {
      const response = await axios.get("https://api.ipify.org?format=json");
      setIpAddress(response.data.ip);
      console.log(response.data.ip);
      let userIP = response.data.ip;
      setIpComplete(true);
      // axios.defaults.withCredentials = true;
      let a = await fetch(`https://ip-tracker-server.vercel.app/`, { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({userIP: userIP})});
      // console.log(a);
      let r = await a.json();
      setIpTracker(r);
      console.log(r);
      // console.log(ipTracker.location.city);
      setLoadingComplete(true);
    }

    fetchData();
  }, []);

  return (
    <>
      {loadingComplete &&
        <div className="container">
          <div className="header w-[100vw] h-80 relative">
            <div className="headerImg">
              {/* <img className='w-full h-[40vh] absolute top-0 left-0 right-0 z-[-1]' src={desktop} alt="" /> */}
              <picture>
                <source srcSet={mobile} media="(max-width: 768px)" />
                <img className='w-full h-80 absolute top-0 left-0 right-0 z-[-1] object-cover' src={desktop} alt="" />
              </picture>
            </div>
            <div className="ipAddress flex flex-col justify-center items-center gap-[1.5rem] pt-6">
              <h1 className='text-white md:text-3xl text-xl font-semibold'>IP Address Tracker</h1>
              <label htmlFor="ip" className='relative'>
                <input onChange={handleChange} className='lg:w-[35vw] max-w-[1200px] md:w-[70vw] w-[85vw] md:py-4 py-2 px-4 rounded-xl text-lg' type="text" id='ip' name='ipAddress' placeholder='Search for any IP address or domain' value={userIPAddress}/>
                <div className="arrow">
                  <button onClick={handleClick} className='absolute right-0 top-0 px-6 rounded-r-xl bg-black md:py-[23px] py-[15px] outline-none hover:bg-[#3F3F3F]'><img className='outline-none' src={arrow} alt="arrow key" /></button>
                </div>
              </label>
            </div>
            <div className="ipDetails w-[80vw] max-w-[1500px] md:min-h-40 bg-white mt-6 mx-auto md:p-8 p-3 rounded-xl flex md:flex-row flex-col md:gap-8 gap-2 absolute md:bottom-[-25%] bottom-[-37%] left-0 right-0 z-10 text-center">
              <div className="ip-address md:w-[25%] w-full  md:border-r-[1px] md:border-slate-400 text-gray-400 font-semibold">
                <h4 className='tracking-[0.15rem]  text-xs'>IP ADDRESS</h4>
                <p className='text-black xl:text-3xl lg:text-xl md:py-2 py-1'>{ipTracker.ip}</p>
                {/* <p className='text-black xl:text-3xl lg:text-xl md:py-2 py-1'>ip</p> */}
              </div>

              <div className="location md:w-[25%] w-full  md:border-r-[1px] md:border-slate-400 text-gray-400 font-semibold">
                <h4 className='tracking-[0.15rem]  text-xs'>LOCATION</h4>
                <p className='text-black xl:text-3xl lg:text-xl md:py-2 py-1'>{ipTracker.location.city}, {ipTracker.location.region}, {ipTracker.location.country}</p>
                {/* <p className='text-black xl:text-3xl lg:text-xl md:py-2 py-1'>city, region, country</p> */}
              </div>

              <div className="timezone md:w-[25%] w-full  md:border-r-[1px] md:border-slate-400 text-gray-400 font-semibold">
                <h4 className='tracking-[0.15rem]  text-xs'>TIMEZONE</h4>
                <p className='text-black xl:text-3xl lg:text-xl md:py-2 py-1'>UTC {ipTracker.location.timezone}</p>
                {/* <p className='text-black xl:text-3xl lg:text-xl md:py-2 py-1'>UTC timezone</p> */}
              </div>

              <div className="isp md:w-[25%] w-full  text-gray-400 font-semibold">
                <h4 className='tracking-[0.15rem]  text-xs'>ISP</h4>
                <p className='text-black xl:text-3xl lg:text-xl md:py-2 py-1'>{ipTracker.isp}</p>
                {/* <p className='text-black xl:text-3xl lg:text-xl md:py-2 py-1'>isp</p> */}
              </div>
            </div>
          </div>
          <MapComponent ipTracker={ipTracker} />
        </div>}
    </>
  )
}

export default App
