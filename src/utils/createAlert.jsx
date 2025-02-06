import Swal from "sweetalert2";

export const createAlert = (icon, text) => {
  //code
  return Swal.fire({
    icon: icon || "info",
    text: text || "Something Wrong",
    timer: 2000,
  });
};
