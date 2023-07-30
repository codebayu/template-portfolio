import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh]">
      <div className="w-[70%] md:w-[30%]">
        <img src="/404.svg" alt="not-found" width="100%" height="100%" />
      </div>
      <Link
        to="/"
        className="text-white bg-teal-600 py-2 px-4 rounded-3xl hover:text-white"
      >
        Back to Homepage
      </Link>
    </div>
  );
};
