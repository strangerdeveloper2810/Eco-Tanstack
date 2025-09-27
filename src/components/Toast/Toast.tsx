import { toast } from "sonner";

// Toast types
export type ToastType = "success" | "error" | "warning" | "info" | "loading";

// Toast options interface
export interface ToastOptions {
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
  onDismiss?: () => void;
  onAutoClose?: () => void;
}

// Toast utility functions
export const toastUtils = {
  success: (message: string, options?: ToastOptions) => {
    return toast.success(message, {
      description: options?.description,
      duration: options?.duration,
      action: options?.action,
      onDismiss: options?.onDismiss,
      onAutoClose: options?.onAutoClose,
    });
  },

  error: (message: string, options?: ToastOptions) => {
    return toast.error(message, {
      description: options?.description,
      duration: options?.duration,
      action: options?.action,
      onDismiss: options?.onDismiss,
      onAutoClose: options?.onAutoClose,
    });
  },

  warning: (message: string, options?: ToastOptions) => {
    return toast.warning(message, {
      description: options?.description,
      duration: options?.duration,
      action: options?.action,
      onDismiss: options?.onDismiss,
      onAutoClose: options?.onAutoClose,
    });
  },

  info: (message: string, options?: ToastOptions) => {
    return toast.info(message, {
      description: options?.description,
      duration: options?.duration,
      action: options?.action,
      onDismiss: options?.onDismiss,
      onAutoClose: options?.onAutoClose,
    });
  },

  loading: (message: string, options?: ToastOptions) => {
    return toast.loading(message, {
      description: options?.description,
      duration: options?.duration,
      action: options?.action,
      onDismiss: options?.onDismiss,
      onAutoClose: options?.onAutoClose,
    });
  },

  dismiss: (toastId?: string | number) => {
    return toast.dismiss(toastId);
  },

  dismissAll: () => {
    return toast.dismiss();
  },
};

// MovieBooking specific toast messages
export const movieBookingToasts = {
  bookingSuccess: (movieTitle: string, cinemaName: string) => {
    return toastUtils.success("Đặt vé thành công!", {
      description: `${movieTitle} tại ${cinemaName}`,
      duration: 5000,
    });
  },

  bookingError: (error?: string) => {
    return toastUtils.error("Đặt vé thất bại!", {
      description: error || "Vui lòng thử lại sau",
      duration: 5000,
    });
  },

  loginSuccess: (userName: string) => {
    return toastUtils.success("Đăng nhập thành công!", {
      description: `Chào mừng ${userName}`,
      duration: 3000,
    });
  },

  loginError: () => {
    return toastUtils.error("Đăng nhập thất bại!", {
      description: "Sai tên đăng nhập hoặc mật khẩu",
      duration: 5000,
    });
  },

  registerSuccess: () => {
    return toastUtils.success("Đăng ký thành công!", {
      description: "Chào mừng bạn đến với MovieBooking",
      duration: 3000,
    });
  },

  networkError: () => {
    return toastUtils.error("Lỗi kết nối!", {
      description: "Vui lòng kiểm tra kết nối internet",
      duration: 5000,
    });
  },
};

// Default export
export default {
  toastUtils,
  movieBookingToasts,
};
