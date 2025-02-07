// rfce
import React from "react";
import { Loader } from "lucide-react";

function Buttons({ isSubmitting, Label }) {
  return (
    <button className="bg-green-500 text-white px-2 py-2 rounded-md hover:cursor-pointer">
      {isSubmitting ? (
        <div className="flex gap-2">
          <Loader className="animate-spin" />
          <p>Loading...</p>
        </div>
      ) : (
        <p>{Label}</p>
      )}
    </button>
  );
}

export default Buttons;
