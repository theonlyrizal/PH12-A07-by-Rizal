import React from 'react';

const CompleteCard = ({ ticket }) => {
  const { title } = ticket;
  return (
    <div>
      <p className="text-xl text-[#001931] font-semibold px-4 py-5 bg-[#E0E7FF] my-2 rounded-2xl">{title}</p>
    </div>
  );
};

export default CompleteCard;
