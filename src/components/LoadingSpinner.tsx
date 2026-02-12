const LoadingSpinner = () => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-1 items-center">
        <div className="size-5 rounded-full border-4 border-gray-400 border-r-gray-600 animate-spin dark:border-gray-600 dark:border-r-gray-400" />
        <span className="text-gray-700 font-semibold dark:text-gray-200">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;