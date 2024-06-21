import React, { useState, useEffect } from 'react';
import './App.css';
import ResourceRequestForm from './ResourceRequestForm';
import RequestTable from './RequestTable';

function App() {
  const [requests, setRequests] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const savedRequests = JSON.parse(localStorage.getItem('requests')) || [];
    setRequests(savedRequests);
  }, []);

  const addRequest = (newRequest) => {
    const updatedRequests = [...requests, newRequest];
    setRequests(updatedRequests, { ...newRequest, status: 'In Progress' }); // Default status set to 'In Progress'
    localStorage.setItem('requests', JSON.stringify(updatedRequests));
    setIsFormVisible(false); // Hide form after submission
  };

  const handleCreateTicket = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleRemoveAll = () => {
    localStorage.setItem('requests', JSON.stringify([""]));
  };


  return (
    <div className="App">
      <header className="App-header">
        {!isFormVisible && (
          <button onClick={handleCreateTicket} className="create-ticket-button">
            Request Resource
          </button>
        )}
        {isFormVisible && (
          <ResourceRequestForm addRequest={addRequest} onClose={handleCloseForm} />
        )}
        <RequestTable requests={requests} />
      </header>
    </div>
  );
}

export default App;
