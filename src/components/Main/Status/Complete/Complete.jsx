import React from 'react';
import CompleteCard from './CompleteCard';

const Complete = ({ resolved, tickets }) => {
  return (
    <div>
      <p className="text-3xl my-5 font-semibold">Resolved Task</p>
      {resolved.length ? (
        resolved.map((token) => {
          const ticket = tickets.find((iteration) => iteration.token === token);
          return <CompleteCard key={token} ticket={ticket} />;
        })
      ) : (
        <p className="text-gray-500">Select a ticket to add to Task Status</p>
      )}
    </div>
  );
};

export default Complete;
