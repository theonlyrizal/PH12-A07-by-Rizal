import Status from './Status/Status';
import Tickets from './Tickets/Tickets';

const Main = ({ tickets, inProgress, resolved, handleInProgress, handleResolve }) => {
  return (
    <div className="flex flex-col justify-between space-x-10 md:flex-row md:px-[4%] mb-20">
      <Tickets tickets={tickets} handleInProgress={handleInProgress} />

      <Status
        inProgress={inProgress}
        resolved={resolved}
        tickets={tickets}
        handleResolve={handleResolve}
      />
    </div>
  );
};

export default Main;
