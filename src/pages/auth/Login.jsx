//rfce
import axios from "axios";
import React, { useState } from "react";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form/formInput";
import { useFormState } from "react-dom";
import Buttons from "../../components/form/Buttons";
import { useNavigate } from "react-router";

// Validator
import { loginSchema, registerSchema } from "../../utils/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { actionLogin, actionRegister } from "../../api/auth";

function Login() {
  // Javascript
  const navigate = useNavigate()

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(loginSchema),
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
      const res = await actionLogin(value);
      const role = res.data.payload.role
      roleRedirect(role)
      // reset()
      createAlert("success", "Login Success");
    } catch (error) {
      createAlert("info", error.response?.data?.message);
      console.log(error.response?.data?.message);
    }
  };



  const roleRedirect = (role) => {
    // code
    if(role === "ADMIN"){
      navigate("/admin")
    }else{
      navigate("/user")
    }
  }

  return (
    <div className="flex w-full h-full justify-end">
      <div className="border w-64 p-4 rounded-md">
        <h1 className="text-xl font-bold text-center">Login</h1>

        {/* form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-2 py-4">
            <FormInput register={register} name="email" errors={errors} />
            <FormInput register={register} name="password" type="password" errors={errors} />


            <div className="flex justify-center">
              <Buttons isSubmitting={isSubmitting} Label="Login" />
            </div>


          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
