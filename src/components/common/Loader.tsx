import { Loader as SpinnerIcon } from 'react-icons/fa';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
}

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
};

export const Loader: React.FC<LoaderProps> = ({ size = 'md', message }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <SpinnerIcon className={`${sizeMap[size]} animate-spin text-blue-600`} />
      {message && <p className="mt-4 text-gray-600">{message}</p>}
    </div>
  );
};
