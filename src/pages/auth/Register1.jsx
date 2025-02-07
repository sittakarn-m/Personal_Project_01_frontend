//rfce
import axios from "axios";
import React, { useState } from "react";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form/formInput";
import { useFormState } from "react-dom";
import Buttons from "../../components/form/Buttons";

// Validator
import { registerSchema } from "../../utils/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { actionRegister } from "../../api/auth";

function Register1() {
  // Javascript

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const { isSubmitting, errors } = formState;

  console.log(errors);

  const hdlOnchange = (e) => {
    // code

    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const hdlSubmit = async (value) => {
    // Delay
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const res = await actionRegister(value);
      console.log(res);
      reset()
      createAlert("success", "Register Success");
    } catch (error) {
      createAlert("info", error.response?.data?.message);
      console.log(error.response?.data?.message);
    }
  };

  return (
    <div className="flex w-full h-full justify-end">
      <div className="border w-64 p-4 rounded-md">
        <h1 className="text-xl font-bold text-center">Register</h1>

        {/* form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-2 py-4">
            <FormInput register={register} name="email" errors={errors} />
            <FormInput register={register} name="firstname" errors={errors} />
            <FormInput register={register} name="lastname" errors={errors} />
            <FormInput register={register} name="password" type="password" errors={errors} />
            <FormInput
              register={register}
              name="confirmPassword"
              type="password"
              errors={errors}
            />

            <div className="flex justify-center">
              <Buttons isSubmitting={isSubmitting} Label="Register" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register1;
