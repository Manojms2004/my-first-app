import React, { useState } from 'react';

export default function Form() {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted: ${inputValue}`);
    }
  return (
    <form onSubmit={handleSubmit}>
            <div>
                <label>Enter something:</label>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                />
            </div>
            <button type="submit">Submit</button>
        </form>
  )
}
