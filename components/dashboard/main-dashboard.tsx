'use client'

import { useState, useRef, useEffect } from 'react';
import { Header } from '@/components/dashboard/header-section';
import { Footer } from '@/components/dashboard/footer-dashboard-section';
import { VideoRecorder } from '@/components/dashboard/VideoRecorder';
import { TranslationTypeSelector } from '@/components/dashboard/TranslationSelector-section';
import { TranslationHistory } from '@/components/dashboard/HistoryRecoder-section';
import { translationTypes } from '@/components/dashboard/utils/translation-types';


export type TranslationResult = {
  id: string;
  timestamp: string;
  text: string;
  confidence: number;
};

export type TranslationType = {
  id: string;
  name: string;
  description: string;
};

export default function SignLanguageTranslatorPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [selectedTranslationType, setSelectedTranslationType] = useState<string>('asl');
  
  const timerRef = useRef<NodeJS.Timeout>();

  // State hasil terjemahan
  const [translationResults, setTranslationResults] = useState<TranslationResult[]>([
    {
      id: '1',
      timestamp: '18 Mei 2025, 10:25',
      text: 'hello world',
      confidence: 0.92
    },
    {
      id: '2',
      timestamp: '18 Mei 2025, 10:20',
      text: 'test',
      confidence: 0.89
    },
    {
      id: '3',
      timestamp: '18 Mei 2025, 10:15',
      text: 'we wok de tok',
      confidence: 0.95
    }
  ]);

  // Cleanup timer
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  
  const handleStartRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
    
    timerRef.current = setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);
    
    console.log('Mulai rekam dan terjemahkan bahasa isyarat');
  };

  
  const handleStopRecording = () => {
    setIsRecording(false);
    
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    const newResult: TranslationResult = {
      id: Date.now().toString(),
      timestamp: new Date().toLocaleString('id-ID', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      text: 'Rekaman baru terdeteksi',
      confidence: 0.88
    };
    
    setTranslationResults(prev => [newResult, ...prev]);
  };

  
  const handleDeleteTranslation = (id: string) => {
    setTranslationResults(prev => prev.filter(result => result.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <Header isRecording={isRecording} />

      {/* Main Content */}
      <main className="container mx-auto p-4 flex-grow flex flex-col md:flex-row gap-6">
        {/* Left: Video Recorder and Translation Type */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          {/* Video Recorder Component */}
          <VideoRecorder 
            isRecording={isRecording}
            recordingTime={recordingTime}
            onStartRecording={handleStartRecording}
            onStopRecording={handleStopRecording}
          />

          {/* Translation Type Selector Component */}
          <TranslationTypeSelector 
            selectedTypeId={selectedTranslationType}
            translationTypes={translationTypes}
            onSelectType={setSelectedTranslationType}
          />
        </div>

        {/* Right: Translation History */}
        <div className="w-full md:w-1/3">
          <TranslationHistory 
            results={translationResults}
            onDelete={handleDeleteTranslation}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}