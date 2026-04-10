'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface QuickTipUser {
  name: string;
  avatarUrl?: string;
}

interface QuickTipProps {
  user: QuickTipUser;
  tip?: string;
}

const defaultTips = [
  'Complete your profile to increase your visibility to recruiters by up to 3x.',
  'Add at least 3 verified credentials to stand out from the crowd.',
  'Keep your skills up to date — employers filter by recent activity.',
  'Connect your wallet to unlock on-chain credential verification.',
  'Share your Credenza profile link on LinkedIn for maximum reach.',
];

function getTipOfTheDay(tips: string[]): string {
  const dayIndex = new Date().getDate() % tips.length;
  return tips[dayIndex];
}

export default function QuickTip({ user, tip }: QuickTipProps) {
  const displayTip = tip ?? getTipOfTheDay(defaultTips);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <Card className="w-full border-none bg-gradient-to-r from-[#84B5FF]/20 to-[#FFCC84]/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">
            Welcome back, {user.name}!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-3">
            <span
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#84B5FF]/30 text-sm"
              aria-hidden="true"
            >
              💡
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Quick Tip: </span>
              {displayTip}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
