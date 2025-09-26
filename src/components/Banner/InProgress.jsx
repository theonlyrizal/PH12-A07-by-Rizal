import React from 'react';
import vector1 from '../../assets/vector1.png';

const InProgress = ({ inProgress }) => {
  return (
    <div className="relative flex justify-between h-[400px] md:w-1/2 bg-gradient-to-br from-[#632ee3] to-[#9f62f2] text-white rounded-2xl border">
      <img src={vector1} className="hidden h-full md:flex md:w-1/2 object-cover" alt="" />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <p className="text-4xl whitespace-nowrap">In-Progress</p>
        <span className="text-8xl">{inProgress.length}</span>
      </div>
      <img
        src={vector1}
        className="hidden h-full md:flex md:w-1/2 object-cover scale-x-[-1]"
        alt=""
      />
    </div>
  );
};

export default InProgress;
