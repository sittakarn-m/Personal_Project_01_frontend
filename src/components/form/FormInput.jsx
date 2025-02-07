//rfce
import React from "react";

function FormInput({ register, name, type="text", errors }) {
  //   console.log(errors[name].message);
  return (
    <div>
      <input
        placeholder={name}
        type={type}
        {...register(name)}
        className="border w-full rounded-sm p-1 px-4"
      />
      {errors[name] && (
        <p className="text-xs text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
}

export default FormInput;
