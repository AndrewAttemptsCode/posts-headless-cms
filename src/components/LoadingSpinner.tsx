const LoadingSpinner = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-1">
        <div className="size-5 animate-spin rounded-full border-4 border-gray-400 border-r-gray-600 dark:border-gray-600 dark:border-r-gray-400" />
        <span className="font-semibold text-gray-700 dark:text-gray-200">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
