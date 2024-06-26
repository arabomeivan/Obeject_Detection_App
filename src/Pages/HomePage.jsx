import React, { useState} from 'react'
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { Button } from 'flowbite-react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import ObjectDetection from '../Components/ObjectDetection'
import 'react-circular-progressbar/dist/styles.css';
import webcam from '../assets/img/webcam.png';
import lighting from '../assets/img/lighting.png';
import lampcharge from '../assets/img/lamp-charge.png';
import speed from '../assets/img/speed.png';
import microphone from '../assets/img/microphone.png';
import monitorrecorder from '../assets/img/monitor-recorder.png';

const HomePage = () => {

  const [startRecording, setStartRecording] = useState(false);
 

  const handleStartRecording = () => {
    

    if(startRecording == false)
      {
        setStartRecording(true);
      }

      else
      {
        setStartRecording(false);
      }
  };
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
      To do this, please position yourself in front of your camera, ensuring that your entire face is clearly visible on the screen. This includes your forehead, eyes, ears, nose, and lips. You can initiate a 5-second recording of yourself by clicking the button below.
      </p>


      <div className='grid md:grid-cols-2 mt-10'>
      
      {/* Webcam wrapper */}
      <div className='Webcam rounded-[10px] p-1 border-[#755AE2] border md:max-w-[275px]'>

        {
          startRecording ? <ObjectDetection  /> :  null
        }
      
      </div>


{/* Verify Connection */}
      <div className='px-0 md:px-4 mt-10 sm:mt-0'>
        {/* First Wrapper for webcam and internet speed */}
        <div className='flex gap-4'>
       <div className='w-[91px] bg-[#E6E0FF] p-4 rounded-2xl relative'>
        <div className='bg-[#755AE2] rounded-full absolute top-0 right-0 w-5 h-5 m-[8%] flex justify-center items-center'>
      {
        startRecording && <img src={monitorrecorder} alt="notloading" className='block mx-auto' />
      }
      
        
          </div>
        
        {/* default indicator for webcam */}
        <div className='mx-auto'>

        {
    startRecording ? <div className='border bg-[#755AE2] border-[#755AE2] rounded-full p-1 '><CircularProgressbarWithChildren value={100} background={true} styles={buildStyles({

       backgroundColor: '#755AE2',
       pathColor: "transparent",

    })}>

    {
      <DoneOutlinedIcon style={{ color: "white" }}/>
    }
    </CircularProgressbarWithChildren></div>  :
  <img src={webcam} alt="notloading" className='block mx-auto' />

  }
            


<div className='text-[10px] text-[#4A4A68] mt-2 font-normal text-center'>
 Webcam
</div>
        </div>


       </div>

       <div className='w-[91px] bg-[#E6E0FF] p-4 rounded-2xl relative'>
       <div className= {startRecording ? 'bg-[#FF5F56] rounded-full absolute top-0 right-0 w-5 h-5 m-[8%] flex justify-center items-center':'bg-[#755AE2] rounded-full absolute top-0 right-0 w-5 h-5 m-[8%] flex justify-center items-center'}>
       {
        startRecording && <img src={speed} alt="notloading" className='block mx-auto' />
      }
       </div>

 {/* default indicator for webcam */}
 <div className='mx-auto'>
 {
    startRecording ? <div className=' rounded-full p-1 '><CircularProgressbarWithChildren value={50} background={true} styles={buildStyles({

      backgroundColor: '#FF5F561A',
      pathColor: "#FF5F56",

   })}>

   {
     <ReportProblemIcon style={{ color: "white" }}/>
   }
   </CircularProgressbarWithChildren></div>  :
  <img src={lighting} alt="notloading" className='block mx-auto' />

  }

<div className='text-[10px] text-[#4A4A68] mt-2 font-normal text-center'>
Speed
</div>
        </div>
       </div>
        </div>


{/* Second wrapper for mic and lightning */}
        <div className='flex gap-4 mt-4'>

        <div className='w-[91px] bg-[#E6E0FF] p-4 rounded-2xl relative'>
        <div className='bg-[#755AE2] rounded-full absolute top-0 right-0 w-5 h-5 m-[8%] flex justify-center items-center'>
        {
        startRecording && <img src={microphone} alt="notloading" className='block mx-auto' />
      }
        </div>

 {/* default indicator for webcam */}
 <div className='mx-auto'>
    
 {
    startRecording ? <div className='border bg-[#755AE2] border-[#755AE2] rounded-full p-1 '><CircularProgressbarWithChildren value={100} background={true} styles={buildStyles({

      backgroundColor: '#755AE2',
      pathColor: "transparent",

   })}>

   {
     <DoneOutlinedIcon style={{ color: "white" }}/>
   }
   </CircularProgressbarWithChildren></div>  :
  <img src={webcam} alt="notloading" className='block mx-auto' />

  }
            

<div className='text-[10px] text-[#4A4A68] mt-2 font-normal text-center'>
 Gadget mic
</div>
        </div>

</div>

<div className='w-[91px] bg-[#E6E0FF] p-4 rounded-2xl relative'>
<div className='bg-[#755AE2] rounded-full absolute top-0 right-0 w-5 h-5 m-[8%] flex justify-center items-center'>

{
        startRecording && <img src={lampcharge} alt="notloading" className='block mx-auto' />
      }
</div>
  
 {/* default indicator for webcam */}
 <div className='mx-auto'>

  {
    startRecording ? <div className='  rounded-full p-1 '><CircularProgressbarWithChildren value={50} background={true} styles={buildStyles({

      backgroundColor: 'transparent',
      pathColor: "#755AE2",

   })}>

   {
    <img src={lighting} alt="notloading" className='block mx-auto' />
   }
   </CircularProgressbarWithChildren></div>  :
  <img src={lighting} alt="notloading" className='block mx-auto' />

  }
        

<div className='text-[10px] text-[#4A4A68] font-normal text-center mt-2'>
 Lighting
</div>
        </div>


       </div>
        </div>
      </div>
      </div>

      <div className='mt-10 flex '>
      <Button onClick={handleStartRecording} color="purple">Take Picture and Continue</Button>
      </div>
    </div>
  )
}

export default HomePage
