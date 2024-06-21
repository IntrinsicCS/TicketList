import React, { useState } from 'react';

const ResourceTypeRadioButtons = () => {
    const [selectedOption, setSelectedOption] = useState('add');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <label>Resource Type:</label>
            <div>
                <input
                    type="radio"
                    id="add"
                    name="resourceType"
                    value="add"
                    checked={selectedOption === 'add'}
                    onChange={handleChange}
                />
                <label htmlFor="add">Add Resource</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="remove"
                    name="resourceType"
                    value="remove"
                    checked={selectedOption === 'remove'}
                    onChange={handleChange}
                />
                <label htmlFor="remove">Remove Resource</label>
            </div>
        </div>
    );
};

export default ResourceTypeRadioButtons;
