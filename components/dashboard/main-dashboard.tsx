'use client'

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UserIcon } from '@heroicons/react/24/outline';
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
  const router = useRouter();

  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [selectedTranslationType, setSelectedTranslationType] = useState<string>('asl');

  const timerRef = useRef<NodeJS.Timeout>();

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

  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [profileSettingsOpen, setProfileSettingsOpen] = useState(false);

  const [userProfile, setUserProfile] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [editProfile, setEditProfile] = useState(userProfile);

  useEffect(() => {
    const storedUser = localStorage.getItem('userProfile');
    if (storedUser) {
      setUserProfile(JSON.parse(storedUser));
    }
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

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(open => !open);
  };

  const openProfileSettings = () => {
    setEditProfile(userProfile);
    setProfileSettingsOpen(true);
    setProfileDropdownOpen(false);
  };

  const closeProfileSettings = () => {
    setProfileSettingsOpen(false);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditProfile(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveProfile = () => {
    setUserProfile(editProfile);
    setProfileSettingsOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <Header isRecording={isRecording} />

      {/* Profile Icon Dropdown */}
      <div className="absolute top-2 right-4 z-50">
        <div className="relative">
          <button
            onClick={toggleProfileDropdown}
            className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition flex items-center justify-center"
            aria-haspopup="true"
            aria-expanded={profileDropdownOpen}
            aria-label="User Menu"
          >
            <UserIcon className="w-6 h-6 text-black dark:text-black" />
          </button>

          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-md rounded-lg w-48 py-2 text-gray-800 dark:text-gray-100">
              <button
                onClick={openProfileSettings}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                Profile Settings
              </button>
              <button
                onClick={() => {
                
                  router.push('/'); 
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Profile Settings Modal */}
      {profileSettingsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-96 max-w-full shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Edit Profile
            </h3>

            <label className="block mb-2">
              <span className="text-gray-700 dark:text-gray-300">Username</span>
              <input
                type="text"
                name="username"
                value={editProfile.username}
                onChange={handleEditChange}
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 text-gray-900 dark:text-gray-100"
              />
            </label>

            <label className="block mb-2">
              <span className="text-gray-700 dark:text-gray-300">Email</span>
              <input
                type="email"
                name="email"
                value={editProfile.email}
                onChange={handleEditChange}
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 text-gray-900 dark:text-gray-100"
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700 dark:text-gray-300">Password</span>
              <input
                type="password"
                name="password"
                value={editProfile.password}
                onChange={handleEditChange}
                placeholder="••••••••"
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 text-gray-900 dark:text-gray-100"
              />
            </label>

            <div className="flex justify-end gap-4">
              <button
                onClick={closeProfileSettings}
                className="px-4 py-2 rounded-md bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={saveProfile}
                className="px-4 py-2 rounded-md bg-primary text-black hover:bg-primary/90 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto p-4 flex-grow flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <VideoRecorder 
            isRecording={isRecording}
            recordingTime={recordingTime}
            onStartRecording={handleStartRecording}
            onStopRecording={handleStopRecording}
          />

          <TranslationTypeSelector 
            selectedTypeId={selectedTranslationType}
            translationTypes={translationTypes}
            onSelectType={setSelectedTranslationType}
          />
        </div>

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
