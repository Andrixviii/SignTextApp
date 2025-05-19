'use client'

import { Clock, History, Trash2, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export type TranslationResult = {
  id: string;
  timestamp: string;
  text: string;
  confidence: number;
};

type TranslationHistoryProps = {
  results: TranslationResult[];
  onDelete: (id: string) => void;
};

export const TranslationHistory = ({ results, onDelete }: TranslationHistoryProps) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-sm p-4 h-full">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <History className="text-primary" size={20} />
        Histori Rekaman
      </h2>
      
      {results.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
          <Clock size={48} className="mb-3 opacity-50" />
          <p>Belum ada rekaman yang tersimpan</p>
        </div>
      ) : (
        <div className="space-y-3 overflow-y-auto max-h-96">
          {results.map(result => (
            <div key={result.id} className="border border-border rounded-lg p-3 hover:bg-accent/50">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="font-medium dark:text-white">{result.text}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Clock size={14} />
                    {result.timestamp}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Akurasi: {Math.round(result.confidence * 100)}%
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleCopy(result.text, result.id)}
                    className="text-gray-400 hover:text-primary dark:text-gray-500 dark:hover:text-primary transition-colors"
                    title="Salin teks"
                  >
                    {copiedId === result.id ? (
                      <Check size={16} className="text-green-500" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                  <button 
                    onClick={() => onDelete(result.id)}
                    className="text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-colors"
                    title="Hapus"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};