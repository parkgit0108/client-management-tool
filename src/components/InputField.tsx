import React from 'react'
import { FieldError } from 'react-hook-form';

type InputFieldProps = {
    label: string;
    type?: string;
    register: any;
    name: string;
    defaultValue?: string;
    error?: FieldError;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const InputField = ({
    label,
    type = "text",
    register,
    name,
    defaultValue,
    error,
    inputProps
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
    <label className="text-xs text-gray-500">{label}</label>
    <input
      type={type}
      {...register(name)}
      className="ring-[1.5px] ring-gray-300 rounded-md p-2 text-sm w-full"
      {...inputProps}
      defaultValue={defaultValue}
    />
    <p className="text-xs text-red-500">
      {error?.message && (
        <p>{error.message.toString()}</p>
      )}
    </p>
  </div>
  )
}
