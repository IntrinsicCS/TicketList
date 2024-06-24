import React from 'react';
import StatusDropDown from '../StatusDropdown/StatusDropDown';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
const StatusList = [
  { label: "ABC 3003", value: "ABC 3003" },
  { label: "PUP D5", value: "PUP D5" },
  { label: "Assay Study 1", value: "Assay Study 1" },
]

const RequestTable = ({ requests }) => {
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
    formatter: (cellContent, row) => (
      <StatusDropDown  initialValue={requests.status}/>
    ),
    editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
      <StatusDropDown initialValue={requests.status}/>
    ),
      
  }];
    const products = requests;
    return (
        <div className={"tabular-report"}>
        <BootstrapTable
            keyField="id"
            classes="table table-bordered table-striped table-xs"
            columns={ columns }
            data={ products }
            cellEdit={cellEditFactory({ mode: 'click', blurToSave: true })}
            className="sortable width-200"
        />
    </div>
    );
};

export default RequestTable;
