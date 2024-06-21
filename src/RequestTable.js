import React from 'react';
import StatusDropDown from './StatusDropDown';

const RequestTable = ({ requests }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Ticket No</th>
                    <th>Created</th>
                    <th>Requester</th>
                    <th>Recipient</th>
                    <th>Work Item</th>
                    <th>Activity</th>
                    <th>Role</th>
                    <th>Request Type</th>
                    <th>Status</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {requests.map((request, index) => (
                    <tr key={index}>
                        <td>{request.ticketNum}</td>
                        <td>{request.formattedCreated}</td>
                        <td>{request.requester}</td>
                        <td>{request.recipient}</td>
                        <td>{request.workItem}</td>
                        <td>{request.activity}</td>
                        <td>{request.role}</td>
                        <td>{request.requestType}</td>
                        <td> <StatusDropDown initialValue={request.status} /></td>
                        <td>{request.message}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RequestTable;
