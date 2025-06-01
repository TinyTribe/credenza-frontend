import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface AccountCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isSelected: boolean;
  isHovered: boolean;
  onClick: () => void;
  onHover: (hovered: boolean) => void;
}

export default function AccountCard({
  icon,
  title,
  description,
  isSelected,
  isHovered,
  onClick,
  onHover,
}: AccountCardProps) {
  const cardVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.02, y: -2 },
    selected: { scale: 1.01, y: -1 },
    tap: { scale: 0.98 },
  };

  const borderColor = isSelected
    ? '#014ADD'
    : isHovered
      ? '#014ADD'
      : '#F1F2F2';
  const titleColor = isSelected ? '#014ADD' : isHovered ? '#014ADD' : '#393A3D';

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate={isSelected ? 'selected' : 'initial'}
      whileHover="hover"
      whileTap="tap"
      className={`relative flex min-h-[162px] w-full cursor-pointer flex-col gap-2.5 overflow-hidden rounded-[8px] border-2 px-4 py-3 transition-all duration-200 ease-in-out lg:max-w-[292.5px]`}
      style={{ borderColor }}
      onClick={onClick}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#014ADD]"
          >
            <motion.svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <path
                d="M1 4.5L4.5 8L11 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="flex items-center gap-2.5"
        style={{ color: titleColor }}
      >
        <motion.div
          animate={{
            rotate: isSelected ? [0, 5, -5, 0] : 0,
            scale: isSelected ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
        <motion.h3
          className="text-[20px] font-bold leading-8"
          animate={{ color: titleColor }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
      </motion.div>
      <p className="font-normal leading-6 tracking-[0.32px] text-[#797979]">
        {description}
      </p>
    </motion.div>
  );
}
