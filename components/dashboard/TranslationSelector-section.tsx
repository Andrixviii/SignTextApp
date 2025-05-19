'use client'

import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

export type TranslationType = {
  id: string;
  name: string;
  description: string;
};

type TranslationTypeSelectorProps = {
  selectedTypeId: string;
  translationTypes: TranslationType[];
  onSelectType: (typeId: string) => void;
};

export const TranslationTypeSelector = ({
  selectedTypeId,
  translationTypes,
  onSelectType
}: TranslationTypeSelectorProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const getSelectedTypeName = () => {
    const selected = translationTypes.find(type => type.id === selectedTypeId);
    return selected ? selected.name : '';
  };

  const handleSelectType = (typeId: string) => {
    onSelectType(typeId);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-sm p-4">
      <h2 className="text-xl font-semibold mb-4">Pilihan Jenis Terjemahan</h2>
      <div className="relative">
        <button 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex items-center justify-between border border-input rounded-lg p-3 bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <span>{getSelectedTypeName()}</span>
          <ChevronDown size={20} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isDropdownOpen && (
          <div className="absolute z-10 w-full mt-1 bg-popover text-popover-foreground border border-border rounded-lg shadow-lg">
            {translationTypes.map(type => (
              <div 
                key={type.id}
                onClick={() => handleSelectType(type.id)}
                className={`p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-white ${
                  selectedTypeId === type.id ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{type.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{type.description}</p>
                  </div>
                  {selectedTypeId === type.id && (
                    <Check size={18} className="text-blue-600 dark:text-blue-400" />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="mt-4 p-4 bg-accent/20 rounded-lg">
        <h3 className="font-medium mb-2">
          Tentang {getSelectedTypeName()}
        </h3>
        <p className="text-sm text-muted-foreground">
          {translationTypes.find(type => type.id === selectedTypeId)?.description}
        </p>
      </div>
    </div>
  );
};