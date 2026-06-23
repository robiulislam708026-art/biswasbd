import { AlertCircle, CheckCircle, InfoIcon, XCircle } from 'react-icons/fa';
import toast, { Toast } from 'react-hot-toast';

type ToastType = 'success' | 'error' | 'info' | 'warning';

const toastIcons = {
  success: <CheckCircle className="w-5 h-5 text-green-500" />,
  error: <XCircle className="w-5 h-5 text-red-500" />,
  info: <InfoIcon className="w-5 h-5 text-blue-500" />,
  warning: <AlertCircle className="w-5 h-5 text-yellow-500" />,
};

export const showToast = (message: string, type: ToastType = 'info') => {
  const icon = toastIcons[type];
  return toast.custom(
    (t) => (
      <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-lg border border-gray-200">
        {icon}
        <span className="text-gray-700">{message}</span>
      </div>
    ),
    {
      duration: 4000,
    }
  );
};

export const Toast = {
  success: (message: string) => showToast(message, 'success'),
  error: (message: string) => showToast(message, 'error'),
  info: (message: string) => showToast(message, 'info'),
  warning: (message: string) => showToast(message, 'warning'),
};
