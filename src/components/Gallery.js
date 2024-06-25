import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Photo = styled.img`
  margin: 10px;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 2px solid #ddd;
`;

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = () => {
    axios.get('http://localhost:5000/photos')
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  };

  return (
    <GalleryContainer>
      {photos.map(photo => (
        <Photo key={photo} src={`http://localhost:5000/${photo}`} alt={photo} />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
