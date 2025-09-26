import React from 'react';

const PendingCard = ({ ticket, handleResolve }) => {
  const { token, title } = ticket;
  const handleComplete = (token) => {
    handleResolve(token);
  };

  return (
    <div>
      <div className="space-y-2 bg-white p-4">
        <p className="text-xl font-semibold">{title}</p>
        <button
          onClick={() => handleComplete(token)}
          className="btn w-full py-7 h-10 bg-[#02A53B] text-white text-xl rounded-lg"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default PendingCard;
