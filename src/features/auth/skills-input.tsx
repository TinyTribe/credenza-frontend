"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

interface SkillsInputProps {
  value: string[]
  onChange: (skills: string[]) => void
}

export function SkillsInput({ value, onChange }: SkillsInputProps) {
  const [inputValue, setInputValue] = useState("")

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault()
      if (!value.includes(inputValue.trim())) {
        onChange([...value, inputValue.trim()])
      }
      setInputValue("")
    }
  }

  const removeSkill = (skill: string) => {
    onChange(value.filter((s) => s !== skill))
  }

  return (
    <div className="min-h-[42px] w-full rounded-md border border-[#e5e5e5] bg-white px-3 py-2 text-sm ring-offset-white focus-within:ring-2 focus-within:ring-[#014add] focus-within:ring-offset-2 focus-within:border-[#014add]">
      <div className="flex flex-wrap gap-2 items-center">
        {value.map((skill) => (
          <div key={skill} className="flex items-center bg-[#f1f2f2] text-[#0f0f0f] px-3 py-1 rounded-md text-sm">
            {skill}
            <button
              type="button"
              onClick={() => removeSkill(skill)}
              className="ml-2 text-[#797979] hover:text-[#0f0f0f]"
            >
              <X size={14} />
            </button>
          </div>
        ))}
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={value.length === 0 ? "Add at least 3 skills and expertise" : "Type and press Enter"}
          className="flex-1 min-w-[120px] outline-none bg-transparent placeholder:text-[#797979]"
        />
      </div>
    </div>
  )
}
