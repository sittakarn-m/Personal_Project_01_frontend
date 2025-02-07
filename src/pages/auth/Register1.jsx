//rfce
import axios from "axios";
import React, { useState } from "react";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form/formInput";
import { useFormState } from "react-dom";
import Buttons from "../../components/form/Buttons";

function Register1() {
  // Javascript

  const { register, handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  console.log(isSubmitting);

  const hdlOnchange = (e) => {
    // code

    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const hdlSubmit = async (value) => {
    // Delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const res = await axios.post("http://localhost:8000/api/register", value);
      console.log(res);
      createAlert("success", "Register Success");
    } catch (error) {
      createAlert("info", error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="flex w-full h-full justify-end">
      <div className="border w-64 p-4 rounded-md">
        <h1 className="text-xl font-bold text-center">Register</h1>

        {/* form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-2 py-4">
            <FormInput register={register} name="email" />
            <FormInput register={register} name="firstname" />
            <FormInput register={register} name="lastname" />
            <FormInput register={register} name="password" />
            <FormInput register={register} name="confirmPassword" />

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
