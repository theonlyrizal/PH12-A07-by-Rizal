import Ticket from './Ticket';

const Tickets = ({ tickets, handleInProgress }) => {
  // console.log(tickets);

  return (
    <div className="flex-3">
      <p className="text-3xl my-5 font-semibold">Customer Tickets</p>
      <div className="w-full flex-col justify-center items-center md:grid md:grid-cols-2 md:gap-5">
        {tickets.map((ticket) => {
          return <Ticket key={ticket.id} ticket={ticket} handleInProgress={handleInProgress} />;
        })}
      </div>
    </div>
  );
};

export default Tickets;
