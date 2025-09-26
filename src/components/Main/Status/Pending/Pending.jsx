import React from 'react';
import PendingCard from './PendingCard';

const Pending = ({ inProgress, tickets, handleResolve }) => {
  // console.log(inProgress);

  return (
    <div>
      <p className="text-3xl my-5 font-semibold">Task Status</p>

      {inProgress.length ? (
        inProgress.map((token) => {
          const ticket = tickets.find((iteration) => iteration.token === token);
          return <PendingCard key={token} ticket={ticket} handleResolve={handleResolve} />;
        })
      ) : (
        <p className="text-gray-500">Select a ticket to add to Task Status</p>
      )}
    </div>
  );
};

export default Pending;
