import { toast } from "sonner";

export const successToast = (
  msg: string
) =>
  toast.success(msg, {
    className: "toast-success",
  });

export const errorToast = (
  msg: string
) =>
  toast.error(msg, {
    className: "toast-error",
  });