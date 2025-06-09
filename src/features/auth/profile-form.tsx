'use client';

import type React from 'react';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Camera } from 'lucide-react';
import Image from 'next/image';
import { SkillsInput } from './skills-input';
import {
  profileFormSchema,
  type ProfileFormValues,
} from '@/lib/profile-schema';

export default function ProfileForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      professionalTitle: '',
      skills: [],
      profileImage: '',
    },
  });

  const { control, handleSubmit, formState, setValue, watch } = form;
  const { errors, isValid } = formState;

  const profileImage = watch('profileImage');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setValue('profileImage', e.target?.result as string, {
          shouldValidate: true,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: ProfileFormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      console.log('Form data submitted:', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Navigate to app or next step
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#ffffff] p-4 sm:p-6">
      <div className="w-full max-w-md space-y-6 sm:space-y-8">
        {/* Logo */}
        <div className="text-center">
          <h1 className="text-xl font-bold tracking-wider sm:text-2xl">
            <span className="text-[#014add]">C</span>
            <span className="text-[#0f0f0f]">REDENZA</span>
          </h1>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-[#014add]"></div>
          <div className="h-3 w-8 rounded-full bg-[#014add]"></div>
          <div className="h-3 w-3 rounded-full bg-[#e5e5e5]"></div>
        </div>

        {/* Main heading */}
        <div className="text-center">
          <h2 className="mb-6 text-xl font-semibold text-[#0f0f0f] sm:mb-8 sm:text-2xl">
            Tell us more about you
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Profile picture upload */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-[#e5e5e5]">
                {profileImage ? (
                  <Image
                    src={profileImage || '/placeholder.svg'}
                    alt="Profile"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Camera className="h-6 w-6 text-[#797979]" />
                )}
              </div>
            </div>
            <div className="flex-1">
              <Label className="mb-2 block text-sm font-medium text-[#0f0f0f]">
                Upload profile picture
              </Label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className={`${
                    profileImage
                      ? 'border-[#014add] bg-white text-[#014add]'
                      : 'border-[#014add] bg-[#014add] text-white'
                  } px-6 hover:bg-[#0138b8] hover:text-white`}
                >
                  {profileImage ? 'Change' : 'Upload'}
                </Button>
              </div>
            </div>
          </div>

          {/* Form fields */}
          <div className="space-y-4 sm:space-y-6">
            {/* First and Last Name */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label
                  htmlFor="firstName"
                  className="text-sm font-medium text-[#0f0f0f]"
                >
                  First Name
                </Label>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="border-[#e5e5e5] focus:border-[#014add] focus:ring-[#014add]"
                        {...field}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="lastName"
                  className="text-sm font-medium text-[#0f0f0f]"
                >
                  Last Name
                </Label>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="border-[#e5e5e5] focus:border-[#014add] focus:ring-[#014add]"
                        {...field}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-[#0f0f0f]"
              >
                Email address
              </Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="border-[#e5e5e5] focus:border-[#014add] focus:ring-[#014add]"
                      {...field}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            {/* Professional title */}
            <div className="space-y-2">
              <Label
                htmlFor="professionalTitle"
                className="text-sm font-medium text-[#0f0f0f]"
              >
                Professional title
              </Label>
              <Controller
                name="professionalTitle"
                control={control}
                render={({ field }) => (
                  <div>
                    <Input
                      id="professionalTitle"
                      placeholder="Eg. Software Engineer"
                      className="border-[#e5e5e5] focus:border-[#014add] focus:ring-[#014add]"
                      {...field}
                    />
                    {errors.professionalTitle && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.professionalTitle.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <Label
                htmlFor="skills"
                className="text-sm font-medium text-[#0f0f0f]"
              >
                Skill & Expertise
              </Label>
              <Controller
                name="skills"
                control={control}
                render={({ field }) => (
                  <div>
                    <SkillsInput
                      value={field.value}
                      onChange={field.onChange}
                    />
                    {errors.skills && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.skills.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting || !isValid}
              className={`w-full rounded-full py-3 text-base font-medium ${
                isValid
                  ? 'bg-[#014add] text-white hover:bg-[#0138b8]'
                  : 'bg-[#bcbec1] text-white hover:bg-[#797979]'
              }`}
            >
              {isSubmitting ? 'Processing...' : 'Go to App'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
