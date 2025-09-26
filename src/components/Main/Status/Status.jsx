import React from 'react';
import Pending from './Pending/Pending';
import Complete from './Complete/Complete';

const Status = ({ inProgress, resolved, tickets, handleResolve }) => {
  return (
    <div className="flex-1 space-y-10">
      <Pending inProgress={inProgress} tickets={tickets} handleResolve={handleResolve} />
      <Complete resolved={resolved} tickets={tickets}/>
    </div>
  );
};

export default Status;
