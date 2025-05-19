'use client'

import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/theme-toggle';

type HeaderProps = {
  isRecording: boolean;
};

export const Header = ({ isRecording }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 transition-all-300 hover-scale">
            <Image 
              src="/images/logo.png" 
              alt="SignText Logo" 
              width={32} 
              height={32} 
              priority 
            />
            <span className="hidden font-bold sm:inline-block">SignText</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {isRecording ? 'Sedang merekam...' : 'Siap merekam'}
            </span>
            <div className={`w-3 h-3 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-green-300'}`}></div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};