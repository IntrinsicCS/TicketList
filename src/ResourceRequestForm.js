import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ResourceRequestForm = ({ addRequest, onClose, isOpen }) => {

    const [recipient, setRecipient] = useState('');
    const [workItem, setWorkItem] = useState('');
    const [activity, setActivity] = useState('');
    const [role, setRole] = useState('');
    const [requestType, setRequestType] = useState('');
    const [message, setMessage] = useState('');

    if (!isOpen) {
        return null;
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const ticketNum = uuidv4();
        const currentDate = new Date();
        const formattedCreated = currentDate.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true // Use 24-hour format if false
        });
        const requester = "testaccount@intrinsiccs.com";
        addRequest({ recipient, workItem, activity, role, requestType, message, ticketNum, formattedCreated, requester });
    };

    return (

        <div className="modal-overlay">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Recipient:</label>
                        <select value={recipient} onChange={(e) => setRecipient(e.target.value)}>
                            <option value="">Select Recipient</option>
                            <option value="Alice">Alice</option>
                            <option value="Bob">Bob</option>
                            <option value="Charlie">Charlie</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Work Item:</label>
                        <select value={workItem} onChange={(e) => setWorkItem(e.target.value)}>
                            <option value="">Select Work Item</option>
                            <option value="Project A">Project A</option>
                            <option value="Project B">Project B</option>
                            <option value="Project C">Project C</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Activity:</label>
                        <select value={activity} onChange={(e) => setActivity(e.target.value)}>
                            <option value="">Select Activity</option>
                            <option value="Development">Development</option>
                            <option value="Testing">Testing</option>
                            <option value="Deployment">Deployment</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Role:</label>
                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="">Select Role</option>
                            <option value="Developer">Developer</option>
                            <option value="Tester">Tester</option>
                            <option value="Manager">Manager</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Request Type:</label>
                        <select value={requestType} onChange={(e) => setRequestType(e.target.value)}>
                            <option value="">Select Type</option>
                            <option value="Add Resource">Add Resource</option>
                            <option value="Remove Resource">Remove Resource</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Message:</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={onClose}>Close</button>
                </form>
            </div>
        </div>
    );
};

export default ResourceRequestForm;
