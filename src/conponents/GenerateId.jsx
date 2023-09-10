import React, { useState } from 'react';

function DynamicIdGenerator() {
    const [idCounter, setIdCounter] = useState(1);

    const generateUniqueId = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let id = '';
        for (let i = 0; i < 13; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            id += characters.charAt(randomIndex);
        }
        return `dynamicId_${id}`;
    };

    const handleClick = () => {
        const newId = generateUniqueId();
        console.log(`Generated ID: ${newId}`);
    };

    return (
        <div>
            <button onClick={handleClick}>Generate ID</button>
            <div id={generateUniqueId()}>Dynamic Content</div>
        </div>
    );
}

export default DynamicIdGenerator;
