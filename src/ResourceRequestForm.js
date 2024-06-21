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
                            <option value="Della Barr">Della Barr</option>
                            <option value="Nellie Adams">Nellie Adams</option>
                            <option value="Ray Moore">Ray Moore</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Work Item:</label>
                        <select value={workItem} onChange={(e) => setWorkItem(e.target.value)}>
                            <option value="">Select Work Item</option>
                            <option value="ABC 3003">ABC 3003</option>
                            <option value="PUP D5">PUP D5</option>
                            <option value="Assay Study 1">Assay Study 1</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Activity:</label>
                        <select value={activity} onChange={(e) => setActivity(e.target.value)}>
                            <option value="">Select Activity</option>
                            <option value="Early Submission">Early Submission</option>
                            <option value="Start-Up">Start-Up</option>
                            <option value="In-Life">In-Life</option>
                            <option value="Close-Out">Close-Out</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Role:</label>
                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="">Select Role</option>
                            <option value="Clinical Trial Manager">Clinical Trial Manager</option>
                            <option value="Clinical Research Associate">Clinical Research Associate</option>
                            <option value="Medical Writer">Medical Writer</option>
                            <option value="Data Manager">Data Manager</option>
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
