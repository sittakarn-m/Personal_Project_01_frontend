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
import useAuthStore from "../../store/auth-store";

function Login() {

  // Zustand
  const actionLoginWithZustand = useAuthStore((state)=>state.actionLoginWithZustand)
  // console.log(test.user)


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
    const res = await actionLoginWithZustand(value); // Call login action
    console.log("Login response:", res); // Log response to debug
  
    if (res.success) {
      roleRedirect(res.role); // Redirect based on role
      reset();
      createAlert("Success", "Welcome back!");
    } else {
      createAlert("Error", res.error || "Something went wrong"); // Show error message
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
