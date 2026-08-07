const ServerError = ({ message }) => {
  if (!message) return null;

  return (
    <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3">
      <p className="text-sm text-center text-red-600 font-medium">
        {message}
      </p>
    </div>
  );
};

export default ServerError;