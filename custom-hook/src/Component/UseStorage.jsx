import React, { useState } from 'react';

const useStorage = (key, initialValue) => {
  const storedContent = JSON.parse(localStorage.getItem(key)) || initialValue;

  const [content, setContent] = useState(storedContent);

  const setStoredContent = (newContent) => {
    setContent(newContent);
    localStorage.setItem(key, JSON.stringify(newContent));
    sessionStorage.setItem(key, JSON.stringify(newContent));
  };

  return [content, setStoredContent];
};

const inputComponent = () => {
  const [inputContent, setInputContent] = useStorage('Stored Input', '');

  return (
    <div className='main'>
      <div className="box">
        <h2 className="head">Enter the content</h2>
        <input
          className='input'
          type="text"
          value={inputContent}
          onChange={(e) => setInputContent(e.target.value)}
        />
      </div>
    </div>
  );
};

export default inputComponent;
