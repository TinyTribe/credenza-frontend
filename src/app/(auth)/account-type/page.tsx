'use client';

import { OrganizationsIcon, TalentsIcon } from '@/components/ui/icons/icons';
import AccountCard from '@/features/auth/account-card';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface AccountType {
  id: string;
  icon: (color: string) => React.ReactNode;
  title: string;
  description: string;
}

const accountTypes: AccountType[] = [
  {
    id: 'talents',
    icon: (color: string) => <TalentsIcon color={color} />,
    title: 'Talents',
    description:
      'If you need a place to showcase your experience and verify it, or if you are looking for job opportunities.',
  },
  {
    id: 'organizations',
    icon: (color: string) => <OrganizationsIcon color={color} />,
    title: 'Organizations',
    description:
      'If you are looking for a place to hunt for talent with verified backgrounds and credentials.',
  },
];

export default function AccountType() {
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const router = useRouter();

  const handleCardClick = (accountId: string) => {
    setSelectedAccount(selectedAccount === accountId ? null : accountId);
  };

  const handleContinue = () => {
    if (selectedAccount) {
      const accountType =
        selectedAccount === 'talents' ? 'talent' : 'organization';
      router.push(`/connect-wallet?type=${accountType}`);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="mx-auto flex h-screen max-w-[1440px] max-lg:h-auto max-lg:min-h-screen">
      <motion.section
        className="hidden w-full overflow-hidden lg:block lg:h-full lg:w-[70%]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Image
          src="/account-type-bg.png"
          alt="Account Type Illustration"
          className="w-full"
          width={622}
          height={1020}
        />
      </motion.section>

      <section className="flex w-full justify-center">
        <motion.div
          className="w-full max-w-[609px] max-xl:px-6 max-lg:mb-20 max-lg:mt-20 max-md:mb-10 max-md:mt-10 lg:mt-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex justify-end" variants={itemVariants}>
            <Image
              src="/logo.svg"
              alt="Credenza logo"
              className="h-auto max-lg:w-[200px] max-md:w-[150px] lg:w-[232px]"
              width={232}
              height={20}
            />
          </motion.div>

          <div className="mx-auto mt-16 flex flex-col gap-6 md:gap-10 lg:mt-20 lg:gap-[52px]">
            <motion.h1
              className="flex w-full justify-end text-[36px] font-medium tracking-[-1.28px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px]"
              variants={itemVariants}
            >
              <span className="md:leading-12 text-right leading-8 lg:max-w-[320px] lg:leading-[64px]">
                Account Type
              </span>
            </motion.h1>

            <motion.div
              className="flex w-full gap-6 max-md:flex-col"
              variants={itemVariants}
            >
              {accountTypes.map((type, index) => {
                const isSelected = selectedAccount === type.id;
                const isHovered = hoveredCard === type.id;
                const iconColor =
                  isSelected || isHovered ? '#014ADD' : '#393A3D';

                return (
                  <motion.div
                    key={type.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                      ease: 'easeOut',
                    }}
                  >
                    <AccountCard
                      icon={type.icon(iconColor)}
                      title={type.title}
                      description={type.description}
                      isSelected={isSelected}
                      isHovered={isHovered}
                      onClick={() => handleCardClick(type.id)}
                      onHover={(hovered) =>
                        setHoveredCard(hovered ? type.id : null)
                      }
                    />
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={selectedAccount ? { scale: 1.01 } : { scale: 1 }}
              whileTap={selectedAccount ? { scale: 0.98 } : { scale: 1 }}
            >
              <motion.button
                className={`w-full rounded-full px-6 py-3.5 text-[18px] font-bold leading-7 text-white transition-all duration-300 md:px-8 md:py-5 ${
                  selectedAccount
                    ? 'cursor-pointer bg-gradient-to-br from-[#004FEE] via-[#004FEE] to-[#00349B] hover:shadow-lg'
                    : 'cursor-not-allowed bg-gray-400 opacity-60'
                }`}
                onClick={handleContinue}
                disabled={!selectedAccount}
                animate={{
                  opacity: selectedAccount ? 1 : 0.6,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  animate={
                    selectedAccount ? { scale: [1, 1.05, 1] } : { scale: 1 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  Continue
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
