import React, {useRef, useState} from 'react'
import Webcam from 'react-webcam';
import { Button } from 'flowbite-react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import webcam from '../assets/img/webcam.png';
import lighting from '../assets/img/lighting.png';
import wifi from '../assets/img/wifi.png';
import tick from '../assets/img/tick-circle.png';

const HomePage = () => {

  // const value = 0.66;

  const [streamKey, setStreamKey] = useState(0);
    const webCamRef = useRef(null);


    const startRecording= ()=>
        {
          const videoStream=  webCamRef.current.stream;
            console.log('Video stream:', videoStream);

            setStreamKey((prevkey) => prevkey + 1);
        }

        // const stopRecording = () => {
        //     if (webCamRef.current && webCamRef.current.stream) {
        //       const videoStream = webCamRef.current.stream;
        //       videoStream.getTracks().forEach((track) => {
        //         track.stop();
        //       });
        //       console.log('Webcam stream stopped.');
        //     } else {
        //       console.log('Webcam stream is not available.');
        //     }
        //   };

  return (
    <div className='bg-white rounded-[20px] p-10'>
      <div className='text-xl font-medium'>
        System check
      </div>

      <p className='text-justify mt-5'>
      We utilize your camera image to ensure fairness for all participants, and we also employ both your camera and microphone for a video questions where you will be prompted to record a response using your camera or webcam, so it's essential to verify that your camera and microphone are functioning correctly and that you have a stable internet connection.
      To do this, please position yourself in front of your camera, ensuring that your entire face is clearly visible on the screen. This includes your forehead, eyes, ears, nose, and lips. You can initiate a  5-second recording of yourself by clicking the button below.
      </p>


      <div className='grid md:grid-cols-2 mt-10'>
      
      {/* Webcam wrapper */}
      <div className='Webcam rounded-[10px] p-1 border-[#755AE2] border md:max-w-[275px]'>
      <Webcam
       audio={false}
       ref={webCamRef}
       screenshotFormat="image/jpeg"
       key={streamKey}
       />
      </div>


{/* Verify Connection */}
      <div className='px-0 md:px-4 mt-10 sm:mt-0'>
        {/* First Wrapper for webcam and internet speed */}
        <div className='flex gap-4'>
       <div className='w-[91px] bg-[#E6E0FF] p-4 rounded-2xl relative'>
        <div className='bg-[#755AE2] rounded-full absolute top-0 right-0 w-5 h-5 m-[8%]' />
        
        {/* default indicator for webcam */}
        <div className='mx-auto'>
        <img src={webcam} alt="notloading" className='block mx-auto' />

<div className='text-[10px] text-[#4A4A68] font-normal text-center'>
 Webcam
</div>
        </div>


       </div>

       <div className='w-[91px] bg-[#E6E0FF] p-4 rounded-2xl relative'>
       <div className='bg-[#755AE2] rounded-full absolute top-0 right-0 w-5 h-5 m-[8%]'/>

 {/* default indicator for webcam */}
 <div className='mx-auto'>
        <img src={wifi} alt="notloading" className='block mx-auto' />

<div className='text-[10px] text-[#4A4A68] font-normal text-center'>
Speed
</div>
        </div>
       </div>
        </div>


{/* Second wrapper for mic and lightning */}
        <div className='flex gap-4 mt-4'>

        <div className='w-[91px] bg-[#E6E0FF] p-4 rounded-2xl relative'>
        <div className='bg-[#755AE2] rounded-full absolute top-0 right-0 w-5 h-5 m-[8%]' />

 {/* default indicator for webcam */}
 <div className='mx-auto'>
        <img src={webcam} alt="notloading" className='block mx-auto' />

<div className='text-[10px] text-[#4A4A68] font-normal text-center'>
 Gadget mic
</div>
        </div>

</div>

<div className='w-[91px] bg-[#E6E0FF] p-4 rounded-2xl relative'>
<div className='bg-[#755AE2] rounded-full absolute top-0 right-0 w-5 h-5 m-[8%]'/>
  
 {/* default indicator for webcam */}
 <div className='mx-auto'>
        <img src={lighting} alt="notloading" className='block mx-auto' />

<div className='text-[10px] text-[#4A4A68] font-normal text-center'>
 Lighting
</div>
        </div>

{/* <CircularProgressbarWithChildren value={66}>

  {

  }
  </CircularProgressbarWithChildren> */}
       </div>
        </div>
      </div>
      </div>

      <div className='mt-10 flex '>
      <Button onClick={startRecording} color="purple">Take Picture and Continue</Button>
      </div>
    </div>
  )
}

export default HomePage
