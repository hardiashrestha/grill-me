import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const PDFUploader = () => {
  const [summary, setSummary] = useState('');

  const onDrop = async (acceptedFiles) => {
    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);
    try {
      const response = await axios.post('http://localhost:5000/api/upload', formData);
      setSummary(response.data.summary);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Upload PDF</h2>
      <div {...getRootProps()} className="border-2 border-dashed p-4 rounded cursor-pointer">
        <input {...getInputProps()} />
        <p>Drag 'n' drop a PDF file here, or click to select one</p>
      </div>
      {summary && (
        <div className="mt-4">
          <h3 className="font-semibold">Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default PDFUploader;