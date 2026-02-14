type ErrorProps = {
  error: string;
};

const ErrorDisplay = ({ error }: ErrorProps) => {
  return (
    <div className="w-fit rounded-lg border-2 border-red-400/80 bg-red-300 p-2 justify-self-center">
      <p className="font-semibold text-balance text-gray-700">{error}</p>
    </div>
  );
};

export default ErrorDisplay;
