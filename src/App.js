import React, { useState, useEffect } from 'react';
import './App.css';
import ResourceRequestForm from './Component/ResourceRequestForm/ResourceRequestForm';
import RequestTable from './Component/RequestTable/RequestTable';

function App() {
  const [requests, setRequests] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const savedRequests = JSON.parse(localStorage.getItem('requests')) || [];
    setRequests(savedRequests);
  }, []);

  const addRequest = (newRequest) => {
    const updatedRequests = [...requests, newRequest];
    setRequests(updatedRequests, { ...newRequest, status: 'Submitted' }); // Default status set to 'In Progress'
    localStorage.setItem('requests', JSON.stringify(updatedRequests));
    setIsFormVisible(false); // Hide form after submission
  };

  const handleCreateTicket = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };


  return (
    <div className="App">
      <header className="App-header">
      <RequestTable requests={requests} />
          <button onClick={handleCreateTicket} className="create-ticket-button">
            Request Resource
          </button>
        {isFormVisible && (
          <ResourceRequestForm addRequest={addRequest} onClose={handleCloseForm} isOpen={isFormVisible} />
        )}
      </header>
    </div>
  );
}

export default App;
