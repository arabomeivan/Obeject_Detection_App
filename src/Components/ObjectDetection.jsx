// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import { drawRect } from "./utilities";

function ObjectDetection() {
    const [streamKey, setStreamKey] = useState(0);
    const[webcamIsOn, setWebcamStatus] = useState(false);
      const webCamRef = useRef(null);
      const canvasRef = useRef(null);
  
  
      const startRecording = () => {
        if (webCamRef.current && webCamRef.current.stream) {
          const videoStream = webCamRef.current.stream;
          // Perform actions with videoStream
          setStreamKey(prevkey => prevkey + 1);
          setWebcamStatus(true);
        } else {
          throw new Error("Webcam reference or stream not available.");
        }
      };

  // Main function
  const runCoco = async () => {
    const net = await cocossd.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webCamRef.current !== "undefined" &&
      webCamRef.current !== null &&
      webCamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webCamRef.current.video;
      const videoWidth = webCamRef.current.video.videoWidth;
      const videoHeight = webCamRef.current.video.videoHeight;

      // Set video width
      webCamRef.current.video.width = videoWidth;
      webCamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const obj = await net.detect(video);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx); 
    }
  };
    

  useEffect(()=>{runCoco()},[]);

  return (
    <div className="relative w-full h-full">
      <Webcam
       audio={false}
       ref={webCamRef}
       screenshotFormat="image/jpeg"
       key={streamKey}
       />

<canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
}

export default ObjectDetection;
