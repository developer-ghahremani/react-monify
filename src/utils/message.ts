import { ToastOptions, toast } from "react-toastify";

export const showMessage = (message: string, options?: ToastOptions) => {
  toast(message, options);
};
