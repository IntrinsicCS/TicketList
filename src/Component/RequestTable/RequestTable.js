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
    text: 'Status',
    style: { overflow: "visible" },
      
  }];
const RequestTable = ({ requests }) => {
    const products = requests;
    return (
        <div className={"tabular-report"}>
        <BootstrapTable
            keyField="id"
            classes="table table-bordered table-striped table-xs"
            columns={ columns }
            data={ products }
            className="sortable width-200"
        />
    </div>
    );
};

export default RequestTable;
