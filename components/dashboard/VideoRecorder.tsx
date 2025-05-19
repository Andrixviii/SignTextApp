'use client'

import { useState, useEffect, useRef } from 'react';
import { Camera, PlayCircle, StopCircle } from 'lucide-react';

type VideoRecorderProps = {
  isRecording: boolean;
  recordingTime: number;
  onStartRecording: () => void;
  onStopRecording: () => void;
};

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export const VideoRecorder = ({ 
  isRecording, 
  recordingTime, 
  onStartRecording, 
  onStopRecording 
}: VideoRecorderProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  
  useEffect(() => {
    if (videoRef.current) {
      startCamera();
    }
    
    return () => {
      if (navigator.mediaDevices && videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);


  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true,
        audio: false
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error('Error saat mengakses kamera:', err);
    }
  };

  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-sm p-4 flex flex-col">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 dark:text-white">
        <Camera className="text-blue-500" size={20} />
        Layar Rekam
      </h2>
      <div className="relative bg-black rounded-lg aspect-video overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
        {isRecording && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-sm font-medium">{formatTime(recordingTime)}</span>
          </div>
        )}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
          {!isRecording ? (
            <button
              onClick={onStartRecording}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition"
            >
              <PlayCircle size={20} />
              <span>Mulai Rekam</span>
            </button>
          ) : (
            <button
              onClick={onStopRecording}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition"
            >
              <StopCircle size={20} />
              <span>Stop Rekam</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};