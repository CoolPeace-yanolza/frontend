import { ToastOptions, toast } from 'react-toastify';

export interface Toast {
  message: string;
  options?: ToastOptions;
}

const showToast = ({ message, options = {} }: Toast) => {
  toast(message, {
    position: 'top-center',
    autoClose: 2000, // 기본 지속 시간을 5초로 설정
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    ...options // 사용자 정의 옵션으로 기본 옵션을 덮어씁니다.
  });
};

export const Toast = {
  success(toast: Toast) {
    showToast({ ...toast, options: { type: 'success', ...toast.options } });
  },
  error(toast: Toast) {
    showToast({ ...toast, options: { type: 'error', ...toast.options } });
  },
  info(toast: Toast) {
    showToast({ ...toast, options: { type: 'info', ...toast.options } });
  }
};

export default Toast;
