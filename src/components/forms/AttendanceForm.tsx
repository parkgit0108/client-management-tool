"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { InputField } from "../InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters!" })
    .max(20, { message: "Username must be at most 20 characters!" }),
  email: z.string().email("Invalid email address!"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  birthday: z.date().min(1, { message: "Birthday is required!" }),
  sex: z.enum(["male", "female"], { message: "Sex is required!" }),
  image: z.instanceof(File, { message: "Image is required!" }),
});

export const AttendanceForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new attendance</h1>
      <span className="text-xs text-gray-500 font-medium">
        Authentication Information
      </span>
      <div className="flex flex-wrap gap-4 justify-between">
        <InputField
          label="Username"
          name="username"
          register={register}
          error={errors.username}
          defaultValue={data?.username}
        />
        <InputField
          label="Email"
          name="email"
          register={register}
          error={errors.email}
          defaultValue={data?.email}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          register={register}
          error={errors.password}
          defaultValue={data?.password}
        />
      </div>

      <span className="text-xs text-gray-500 font-medium">
        Personal Information
      </span>
      <div className="flex flex-wrap gap-4 justify-between">
        <InputField
          label="First Name"
          name="firstName"
          register={register}
          error={errors.firstName}
          defaultValue={data?.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          register={register}
          error={errors.lastName}
          defaultValue={data?.lastName}
        />
        <InputField
          label="Phone Number"
          name="phone"
          register={register}
          error={errors.phone}
          defaultValue={data?.phone}
        />
        <InputField
          label="Address"
          name="address"
          register={register}
          error={errors.address}
          defaultValue={data?.address}
        />
        <InputField
          label="Birthday"
          type="date"
          name="birthday"
          register={register}
          error={errors.birthday}
          defaultValue={data?.birthday}
        />

        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Sex</label>
          <select
            {...register("sex")}
            defaultValue={data?.sex}
            className="ring-[1.5px] ring-gray-300 rounded-md p-2 text-sm w-full"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <p className="text-xs text-red-500">
            {errors.sex?.message && <p>{errors.sex.message.toString()}</p>}
          </p>
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center ">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="image"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span className="text-sm">Upload Image</span>
          </label>
          <input
            type="file"
            id="image"
            {...register("image")}
            className="hidden"
          />
          <p className="text-xs text-red-500">
            {errors.image?.message && <p>{errors.image.message.toString()}</p>}
          </p>
        </div>
      </div>

      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};
