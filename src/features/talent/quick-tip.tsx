import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';

interface QuickTipProps {
  userName: string;
  tip: string;
}

export default function QuickTip({ userName, tip }: QuickTipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full"
    >
      <Card className="border border-[#E8EAED] bg-white shadow-sm">
        <CardContent className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-start">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF3FF]"
          >
            <Lightbulb className="h-5 w-5 text-[#014ADD]" />
          </motion.div>

          <div className="flex flex-col gap-1">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="text-base font-semibold text-[#393A3D]"
            >
              Welcome back, {userName}!
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="text-sm leading-relaxed text-[#797979]"
            >
              <span className="font-medium text-[#014ADD]">Quick tip: </span>
              {tip}
            </motion.p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
