import React,  { useState } from 'react';


const StatusDropDown = ({ initialValue, options }) => {

    const [value, setValue] = useState(initialValue);

    return (
        <select value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="InProgress">Progress</option>
        <option value="Submitted">Submitted</option>
        <option value="Completed">Completed</option>
        <option value="Rejected">Rejected</option>
    </select>
    );
};

export default StatusDropDown;
