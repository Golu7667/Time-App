









      
      
          
         
         
        
          
        

// components/ResumeScanner.js

import { useState } from 'react';

export default function ResumeScanner() {
  const [result, setResult] = useState('');

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    
    // Perform file upload and scanning here
    const text = await extractTextFromResume(file);
    const isFullStack = checkFullStack(text);

    setResult(isFullStack ? 'Full-stack developer' : 'Not a full-stack developer');
  };

  const extractTextFromResume = async (file) => {
    // Implement text extraction logic from the uploaded resume (e.g., using a library like pdf-parse)
    return 'Text content from the resume';
  };

  const checkFullStack = (text) => {
    // Implement logic to check if the text contains keywords like "full stack"
    return text.toLowerCase().includes('full stack');
  };

  return (
    <div>
      <h1>Resume Scanner</h1>
      <div
        onDrop={handleFileUpload}
        onDragOver={(e) => e.preventDefault()}
        style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center', cursor: 'pointer' }}
      >
        Drag and drop your resume here
      </div>
      <button onClick={handleFileUpload}>Scan Resume</button>
      <div>{result}</div>
    </div>
  );
}
