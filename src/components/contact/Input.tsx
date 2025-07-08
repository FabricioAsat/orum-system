import type { ChangeEvent } from "react";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
}: InputProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-base font-semibold text-text-muted mb-1"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full bg-input-bg text-text-main placeholder-placeholder border border-input-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/75"
      />
    </div>
  );
}
