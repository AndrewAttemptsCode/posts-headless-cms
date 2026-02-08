const Logo = () => {
  return (
    <div className="py-4">
      <div className="relative justify-self-center p-2">
        <h1 className="relative z-5 text-3xl font-semibold text-gray-200 dark:text-gray-700">
          Posty
        </h1>
        <div className="animate-logoDrop absolute inset-0 origin-top-left bg-gray-500 dark:bg-gray-300"></div>
        <div className="absolute inset-0 bg-gray-700 dark:bg-gray-200"></div>
      </div>
    </div>
  );
};

export default Logo;
