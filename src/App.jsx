import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';

const fetchTickets = async () => {
  try {
    const fetchedTickets = await fetch('/tickets.json');
    const ticketJson = await fetchedTickets.json();
    return ticketJson;
  } catch {
    console.log('JSON Could not be loaded properly');
  }
};

function App() {
  const ticketPromise = fetchTickets();

  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  useEffect(() => {
    ticketPromise.then((data) => {
      setTickets(data);
    });
  }, []);

  useEffect(() => {
    console.clear();
    console.log(tickets);
  }, [tickets]);

  const handleInProgress = (token) => {
    const newProgress = [...inProgress, token];
    setInProgress(newProgress);
    statusUpdate(token);
    toast.info(`Ticket added to queue! (token ${token})`);
  };

  const statusUpdate = (token) => {
    const dummyTickets = tickets.map((dtkt) => {
      if (dtkt.token === token) {
        if (dtkt.status === 'open') return { ...dtkt, status: 'in-progress' };
        if (dtkt.status === 'in-progress') return { ...dtkt, status: 'resolved' };
      }
      return dtkt;
    });

    setTickets(dummyTickets);
  };

  const handleResolve = (token) => {
    const newResolved = [...resolved, token];
    const newInProgress = [...inProgress];
    setResolved(newResolved);
    const ticketNumResolved = newInProgress.indexOf(token);
    newInProgress.splice(ticketNumResolved, 1);
    setInProgress(newInProgress);
    toast.success(`Ticket Resolved! (token ${token})`);
    statusUpdate(token);
  };

  return (
    <div className="min-h-screen bg-gray-100 mx-[2%] md:mx-0">
      <Navbar />
      <Banner inProgress={inProgress} resolved={resolved} />
      <Main
        tickets={tickets}
        inProgress={inProgress}
        resolved={resolved}
        handleInProgress={handleInProgress}
        handleResolve={handleResolve}
      />
      <Footer />

      <ToastContainer position="bottom-right" hideProgressBar theme="light" />
    </div>
  );
}

export default App;
