import React from 'react';
import InProgress from './InProgress';
import Resolved from './Resolved';

const Banner = ({ inProgress, resolved }) => {
  return (
    <div>
      <div className="flex flex-col space-y-5 md:space-x-5 md:flex-row justify-between py-20 px-[2%]">
        <InProgress inProgress={inProgress} />
        <Resolved resolved={resolved} />
      </div>
    </div>
  );
};

export default Banner;
