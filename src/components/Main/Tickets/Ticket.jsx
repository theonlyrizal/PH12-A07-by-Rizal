
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

const Ticket = ({ ticket, handleInProgress }) => {
  // console.log(ticket);
  const { id, token, title, description, customer, priority, status, createdAt } = ticket;

  const handleClick = () => {
    if (status === 'open') handleInProgress(token);
  };

  return (
    <div
      onClick={() => handleClick()}
      className={`${
        status === 'resolved' ? 'hidden' : 'flex-col'
      } space-y-3 p-5 shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-lg ${
        status === 'open' ? 'hover:cursor-pointer' : 'hover:cursor-not-allowed'
      }`}
    >
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">{title}</p>
        <div
          className={`badge badge-soft ${status === 'open' ? 'bg-[#B9F8CF]' : 'bg-[#F8F3B9]'}  ${
            status === 'open' ? 'text-[#02A53B]' : 'text-[#FEBB0C]'
          }  font-bold badge-success rounded-2xl`}
        >
          <FontAwesomeIcon icon={faCircle} />
          {status}
        </div>
      </div>
      <p className="text-gray-500">{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center space-x-2">
          <p className="text-gray-500">
            #<span>{token}</span>
          </p>
          <p
            className={`${
              priority.toLowerCase() === 'high'
                ? 'text-red-500'
                : priority.toLowerCase() === 'medium'
                ? 'text-yellow-500'
                : 'text-green-500'
            }`}
          >
            {priority}
          </p>
        </div>
        <div className="flex justify-end items-center space-x-1 text-gray-500">
          <p>{customer}</p>
          <FontAwesomeIcon icon={faCalendar} />
          <p>{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
