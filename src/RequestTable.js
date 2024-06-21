import React from 'react';

const RequestTable = ({ requests }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Recipient</th>
                    <th>Work Item</th>
                    <th>Activity</th>
                    <th>Role</th>
                    <th>Request Type</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {requests.map((request, index) => (
                    <tr key={index}>
                        <td>{request.recipient}</td>
                        <td>{request.workItem}</td>
                        <td>{request.activity}</td>
                        <td>{request.role}</td>
                        <td>{request.requestType}</td>
                        <td>{request.message}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RequestTable;
