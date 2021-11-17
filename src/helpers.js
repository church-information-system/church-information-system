import Swal from "sweetalert2";

export function inputGetter(id) {
  return document.getElementById(id).value;
}

export function getById(id) {
  return document.getElementById(id);
}

export async function customAlert(message, icon) {
  await Swal.fire({
    title: message,
    icon: icon,
  });
}
