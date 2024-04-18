import React from 'react';
import { PixabayImage } from '../../types/PixabayImage';
import './images.scss';

// Define the props interface for ImageContainer component
interface ImageContainerProps {
  images: PixabayImage[]; // Array of PixabayImage objects
  onImageClick: (image: PixabayImage) => void; // Function to handle image click event
}

// Define the ImageContainer functional component
const ImageContainer: React.FC<ImageContainerProps> = ({ images, onImageClick }) => {
  return (
    <div className="image-container">
      {/* Map through the images array and render each image */}
      {images.map((image) => (
        <div
          key={image.id} // Unique key for each image
          className="image-item"
          onClick={() => {
            onImageClick(image); // Call the onImageClick function with the clicked image
          }}
        >
          <img src={image.webformatURL} alt={`Pixabay Image ${image.id}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageContainer;
