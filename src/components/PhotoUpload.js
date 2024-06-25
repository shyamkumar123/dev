import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import styled from 'styled-components';

const DropzoneContainer = styled.div`
  border: 2px dashed #ccc;
  padding: 20px;
  margin: 20px;
  cursor: pointer;
  text-align: center;
`;

const PhotoUpload = ({ onUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);

    axios.post('http://localhost:5000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then(response => {
      onUpload();
    }).catch(error => {
      console.error('Error uploading file:', error);
    });
  }, [onUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <DropzoneContainer {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </DropzoneContainer>
  );
};

export default PhotoUpload;
