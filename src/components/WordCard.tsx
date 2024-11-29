import React from 'react';
import { Volume2, BookOpen, Loader2 } from 'lucide-react';
import { Word } from '../types/word';

interface WordCardProps {
  word: Word;
  onSpeak: () => void;
  onSpeakDefinition: () => void;
  isPlaying?: boolean;
}

export function WordCard({ word, onSpeak, onSpeakDefinition, isPlaying = false }: WordCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{word.word}</h2>
        <p className="text-lg text-gray-600 mb-6">{word.pronunciation}</p>
        <p className="text-gray-700 mb-6">{word.definition}</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onSpeak}
            disabled={isPlaying}
            className={`inline-flex items-center justify-center ${
              isPlaying ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'
            } text-white rounded-full p-3 transition-colors`}
            aria-label="Speak word"
          >
            {isPlaying ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <Volume2 className="w-6 h-6" />
            )}
          </button>
          <button
            onClick={onSpeakDefinition}
            disabled={isPlaying}
            className={`inline-flex items-center justify-center ${
              isPlaying ? 'bg-green-300' : 'bg-green-500 hover:bg-green-600'
            } text-white rounded-full p-3 transition-colors`}
            aria-label="Speak definition"
          >
            {isPlaying ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <BookOpen className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}