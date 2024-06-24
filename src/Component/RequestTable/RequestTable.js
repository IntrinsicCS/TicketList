import React from 'react';
import StatusDropDown from '../StatusDropdown/StatusDropDown';
import BootstrapTable from 'react-bootstrap-table-next';
const columns = [{
    dataField: 'ticketNum',
    text: 'Ticket No.'
  }, {
    dataField: 'formattedCreated',
    text: 'Created'
  }, {
    dataField: 'message',
    text: 'Summary'
  }, {
    dataField: 'workItem',
    text: 'Work Item'
  }, {
    dataField: 'activity',
    text: 'Activity'
  }, {
    dataField: 'role',
    text: 'Role'
  }, {
    dataField: 'requestType',
    text: 'Request Type'
  }, {
    dataField: 'requester',
    text: 'Requester'
  }, {
    dataField: 'recipient',
    text: 'Recipient'
  }, {
    dataField: 'status',
    text: 'Status'
  }];
const RequestTable = ({ requests }) => {
    const products = [ ...requests ];
    return (
        <>
        {/* <table>
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
        </table> */}
        <div className={"tabular-report"}>
        <BootstrapTable
            keyField="id"
            classes="table table-bordered table-striped table-xs"
            columns={ columns }
            data={ products }
            className="sortable width-200"
            // {...props.baseProps}
        />
    </div>
    </>
    );
};

export default RequestTable;
