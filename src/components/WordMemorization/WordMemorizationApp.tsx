import React from 'react';
import { WordCard } from './WordCard';
import { Navigation } from './Navigation';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { ErrorMessage } from '../ui/ErrorMessage';
import { useWordMemorization } from '../../hooks/useWordMemorization';
import { Link, useSearchParams } from 'react-router-dom';

export function WordMemorizationApp() {
  const [searchParams] = useSearchParams();
  const {
    currentWord,
    isLastWord,
    nextWord,
    resetWords,
    speakWord,
    speakDefinition,
    totalWords,
    currentIndex,
    wordSet,
    error,
    isLoading,
  } = useWordMemorization();

  const isCustomDataPath = searchParams.has('dataPath');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <ErrorMessage message={error} />
      </div>
    );
  }

  if (!currentWord) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <ErrorMessage message="No words available." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="absolute top-4 right-4 flex gap-4">
        <Link
          to="?set=english"
          className="text-blue-500 hover:text-blue-700 transition-colors"
        >
          English
        </Link>
        <Link
          to="?set=pinyin"
          className="text-blue-500 hover:text-blue-700 transition-colors"
        >
          Pinyin
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        {wordSet.name}
        {isCustomDataPath && <span className="text-sm text-gray-500 ml-2">(Custom Dataset)</span>}
      </h1>
      <WordCard 
        word={currentWord} 
        onSpeak={speakWord}
        onSpeakDefinition={speakDefinition}
      />
      <Navigation
        onNext={nextWord}
        onReset={resetWords}
        isLastWord={isLastWord}
        currentIndex={currentIndex}
        totalWords={totalWords}
      />
    </div>
  );
}