import type { ChangeEvent } from "react";

interface TextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function Textarea({
  label,
  name,
  placeholder = "",
  rows = 5,
  value,
  onChange,
}: TextareaProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-base font-semibold text-text-muted mb-1"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-input-bg text-text-main placeholder-placeholder border border-input-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/75 resize-none"
      ></textarea>
    </div>
  );
}
