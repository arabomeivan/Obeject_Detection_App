import React, { useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.png';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import timer from '../assets/img/timer-start.png';

const NavBar = () => {

    // countdown
  const [secondsLeft, setSecondsLeft] = useState(300);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 1000);

    // Cleanup the interval on component unmount or when count reaches 0
    return () => clearInterval(timer);
  }, []);

// Convert seconds to minutes and seconds
const minutes = Math.floor(secondsLeft / 60);
const seconds = secondsLeft % 60;

  return (
    <div>

 <nav className="bg-white">
  <div className="nav-wrapper">
    <div className="container flex justify-between p-4 mx-auto">
      <div className="flex gap-4">
      <div>
      <Link to="/" className="brand-logo"><img src={logo} alt="not loading" /></Link>
      </div>
      
      <div>
      <h5 className="text-xl font-medium">
        Frontend developer
      </h5>
      <p className="text-[14px] text-[#8C8CA1]">
        Skill assesment test
      </p>
      </div>
      
      </div>
      
      <div className=" flex self-center gap-3">
      <div id="timer" className="flex gap-5 p-4 text-lg rounded-lg bg-[#E6E0FF] text-[#755AE2] h-[44px]">

<div className="wrapper self-center flex">
<div className="p-2 rounded-full bg-[#E6E0FF] text-[#755AE2] flex self-center">
<div className="icon-wrapper self-center h-fit">
<img src={timer} alt="" />
</div>

</div>

<div className="flex items-center gap-1">
<span className="font-bold text-xs md:text-lg">{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
<span className="hidden md:block">time left</span>
</div>
</div>


</div>

<div className="p-2 rounded-full bg-[#E6E0FF] text-[#755AE2] self-center w-[40px] h-[40px] flex">
<div className="icon-wrapper self-center h-fit mx-auto">
<RemoveRedEyeOutlinedIcon/>
</div>

</div>
      </div>
      
    </div>
  </div>
 </nav>
    </div>
  )
}

export default NavBar
