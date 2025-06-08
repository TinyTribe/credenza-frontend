'use client';

import type React from 'react';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Camera } from 'lucide-react';
import {
  organizationFormSchema,
  type OrganizationFormValues,
} from '@/lib/organization-schema';

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
];

const states = [
  { value: 'ca', label: 'California' },
  { value: 'ny', label: 'New York' },
  { value: 'tx', label: 'Texas' },
  { value: 'fl', label: 'Florida' },
  { value: 'wa', label: 'Washington' },
  { value: 'il', label: 'Illinois' },
];

const organizationTypes = [
  { value: 'university', label: 'University' },
  { value: 'corporation', label: 'Corporation' },
  { value: 'nonprofit', label: 'Non-profit' },
  { value: 'government', label: 'Government' },
  { value: 'startup', label: 'Startup' },
  { value: 'other', label: 'Other' },
];

export default function OrganizationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<OrganizationFormValues>({
    resolver: zodResolver(organizationFormSchema),
    defaultValues: {
      organizationName: '',
      country: '',
      state: '',
      organizationType: '',
      organizationEmail: '',
      companyLogo: '',
    },
  });

  const { control, handleSubmit, formState, setValue, watch } = form;
  const { errors, isValid } = formState;

  const companyLogo = watch('companyLogo');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setValue('companyLogo', e.target?.result as string, {
          shouldValidate: true,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: OrganizationFormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      console.log('Organization form data submitted:', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Navigate to app or next step
      alert('Organization setup completed successfully!');
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
            Setup your organization
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Company logo upload */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-[#e5e5e5]">
                {companyLogo ? (
                  <img
                    src={companyLogo || '/placeholder.svg'}
                    alt="Company Logo"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Camera className="h-6 w-6 text-[#797979]" />
                )}
              </div>
            </div>
            <div className="flex-1">
              <Label className="mb-2 block text-sm font-medium text-[#0f0f0f]">
                Upload Company Logo
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
                    companyLogo
                      ? 'border-[#014add] bg-white text-[#014add]'
                      : 'border-[#014add] bg-[#014add] text-white'
                  } px-6 hover:bg-[#0138b8] hover:text-white`}
                >
                  {companyLogo ? 'Change' : 'Upload'}
                </Button>
              </div>
            </div>
          </div>

          {/* Form fields */}
          <div className="space-y-4 sm:space-y-6">
            {/* Organization Name */}
            <div className="space-y-2">
              <Label
                htmlFor="organizationName"
                className="text-sm font-medium text-[#0f0f0f]"
              >
                Organization Name
              </Label>
              <Controller
                name="organizationName"
                control={control}
                render={({ field }) => (
                  <div>
                    <Input
                      id="organizationName"
                      placeholder="e.g., Stanford University"
                      className="border-[#e5e5e5] focus:border-[#014add] focus:ring-[#014add]"
                      {...field}
                    />
                    {errors.organizationName && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.organizationName.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            {/* Country and State */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label
                  htmlFor="country"
                  className="text-sm font-medium text-[#0f0f0f]"
                >
                  Country
                </Label>
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="border-[#e5e5e5] focus:border-[#014add] focus:ring-[#014add]">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem
                              key={country.value}
                              value={country.value}
                            >
                              {country.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.country && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.country.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="state"
                  className="text-sm font-medium text-[#0f0f0f]"
                >
                  State
                </Label>
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="border-[#e5e5e5] focus:border-[#014add] focus:ring-[#014add]">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          {states.map((state) => (
                            <SelectItem key={state.value} value={state.value}>
                              {state.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.state && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.state.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>

            {/* Organization Type */}
            <div className="space-y-2">
              <Label
                htmlFor="organizationType"
                className="text-sm font-medium text-[#0f0f0f]"
              >
                Organization Type
              </Label>
              <Controller
                name="organizationType"
                control={control}
                render={({ field }) => (
                  <div>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="border-[#e5e5e5] focus:border-[#014add] focus:ring-[#014add]">
                        <SelectValue placeholder="Select organization type" />
                      </SelectTrigger>
                      <SelectContent>
                        {organizationTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.organizationType && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.organizationType.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            {/* Organization Email */}
            <div className="space-y-2">
              <Label
                htmlFor="organizationEmail"
                className="text-sm font-medium text-[#0f0f0f]"
              >
                Organization Email address
              </Label>
              <Controller
                name="organizationEmail"
                control={control}
                render={({ field }) => (
                  <div>
                    <Input
                      id="organizationEmail"
                      type="email"
                      placeholder="e.g., Organization@su.com"
                      className="border-[#e5e5e5] focus:border-[#014add] focus:ring-[#014add]"
                      {...field}
                    />
                    {errors.organizationEmail && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.organizationEmail.message}
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
