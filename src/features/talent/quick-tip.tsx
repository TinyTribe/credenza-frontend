'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

interface QuickTipProps {
  userName?: string;
  tip?: string;
  onDismiss?: () => void;
}

const tips = [
  'Complete your profile to increase your visibility to employers',
  'Verify your credentials to build trust with potential employers',
  'Update your skills regularly to stay competitive in the market',
  'Share your achievements and accomplishments with the community',
  'Connect with other professionals to expand your network',
];

export default function QuickTip({
  userName = 'Talent',
  tip,
  onDismiss,
}: QuickTipProps) {
  const [showTip, setShowTip] = React.useState(true);
  const displayTip = tip || tips[Math.floor(Math.random() * tips.length)];

  const handleDismiss = () => {
    setShowTip(false);
    onDismiss?.();
  };

  if (!showTip) return null;

  return (
    <div className="w-full rounded-lg border border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-900">
            Welcome back, {userName}! 👋
          </h2>
          <p className="mt-2 text-sm text-gray-600">{displayTip}</p>
          <button className="mt-4 flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700">
            Learn more
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600"
          aria-label="Dismiss welcome message"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
