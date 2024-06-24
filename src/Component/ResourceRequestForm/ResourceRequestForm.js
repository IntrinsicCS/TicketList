import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';
import Select from 'react-select';
    const requestTypeLists = [
        { label: "Add Resource", value: "Add Resource" }, 
        { label: "Remove Resource", value: "Remove Resource" }
    ]
    const recipientList = [
        { label: "Della Barr", value: "Della Barr" },
        { label: "Nellie Adams", value: "Nellie Adams" },
        { label: "Ray Moore", value: "Ray Moore" },
    ]
    const workItemtList = [
        { label: "ABC 3003", value: "ABC 3003" },
        { label: "PUP D5", value: "PUP D5" },
        { label: "Assay Study 1", value: "Assay Study 1" },
    ]
    const activityList = [
        { label: "Early Submission", value: "Early Submission" },
        { label: "Start-Up", value: "Start-Up" },
        { label: "In-Life", value: "In-Life" },
        { label: "Close-Out", value: "Close-Out" },
    ]
    const roleList = [
        { label: "Clinical Trial Manager", value: "Clinical Trial Manager" },
        { label: "Clinical Research Associate", value: "Clinical Research Associate" },
        { label: "Medical Writer", value: "Medical Writer" },
        { label: "Data Manager", value: "Data Manager" },
    ]

    const ResourceRequestForm = ({ addRequest, onClose, isOpen }) => {

    const [model, setModel] = useState(isOpen);
    const [recipient, setRecipient] = useState('');
    const [workItem, setWorkItem] = useState('');
    const [activity, setActivity] = useState('');
    const [role, setRole] = useState('');
    const [requestType, setRequestType] = useState('');
    const [message, setMessage] = useState('');

    if (!isOpen) {
        return false;
    }
    const toggle = () => {
        setModel(!model);
        onClose();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const ticketNum = uuid().slice(0,8);
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
        isOpen =false;
        const requester = "testaccount@intrinsiccs.com";
        toggle();
        addRequest({ recipient:recipient.value?recipient.value:'-',
             workItem:workItem.value?workItem.value:'-',
             activity:activity.value?activity.value:'-',
             role:role.value?role.value:'-',
             requestType:requestType.value?requestType.value:'-', 
             message:message?message:'-', 
             ticketNum, 
             formattedCreated, 
             requester:requester, });
    };

    return (
        <Modal isOpen={model} toggle={toggle} className='notifications-dialog'>
            <ModalHeader toggle={toggle}>Resource Request Form</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <label>Recipient:</label>
                    <Select
                        className="multi-select"
                        classNamePrefix="multi-select"
                        isSearchable={true}
                        isMulti={false}
                        value={recipient}
                        options={recipientList}
                        onChange={(selection) => {
                            setRecipient(null);
                            if (selection){
                                window.setTimeout(() => {
                                    setRecipient(selection);
                                }, 0);
                            }                         
                        }}
                        placeholder="Recipient"
                    />
                </FormGroup>
                <FormGroup>
                    <label>WorkItem:</label>
                    <Select
                        className="multi-select"
                        classNamePrefix="multi-select"
                        isSearchable={true}
                        isMulti={false}
                        value={workItem}
                        options={workItemtList}
                        onChange={(selection) => {
                            setWorkItem(null);
                            if (selection){
                                window.setTimeout(() => {
                                    setWorkItem(selection);
                                }, 0);
                            }                         
                        }}
                        placeholder="Select WorkItem"
                    />
                </FormGroup>
                <FormGroup>
                    <label>Activity:</label>
                    <Select
                        className="multi-select"
                        classNamePrefix="multi-select"
                        isSearchable={true}
                        isMulti={false}
                        value={activity}
                        options={activityList}
                        onChange={(selection) => {
                            setActivity(null);
                            if (selection){
                                window.setTimeout(() => {
                                    setActivity(selection);
                                }, 0);
                            }                         
                        }}
                        placeholder="Select Activity"
                    />
                </FormGroup>
                <FormGroup>
                    <label>Role:</label>
                    <Select
                        className="select"
                        classNamePrefix="select"
                        isSearchable={true}
                        isMulti={false}
                        value={role}
                        options={roleList}
                        onChange={(selection) => {
                            setRole(null);
                            if (selection){
                                window.setTimeout(() => {
                                    setRole(selection);
                                }, 0);
                            }                         
                        }}
                        placeholder="Select Role"
                    />
                </FormGroup>
                <FormGroup>
                    <label>Request Types:</label>
                    <Select
                        className="multi-select"
                        classNamePrefix="multi-select"
                        isSearchable={true}
                        isMulti={false}
                        value={requestType}
                        onChange={(selection) => {
                            setRequestType(null);
                            if (selection){
                                window.setTimeout(() => {
                                    setRequestType(selection);
                                }, 0);
                            }                         
                        }}
                        options={requestTypeLists}
                        placeholder="Select Request Types"
                    />
                </FormGroup>
                <FormGroup>
                    <label>Message:</label>
                    <Input type="textarea" maxLength={1000}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                    Close
                </Button>
                <Button color="primary" className='primary' onClick={handleSubmit}>
                    Submit
                </Button>
            </ModalFooter>
        </Modal>


    );
};

export default ResourceRequestForm;
