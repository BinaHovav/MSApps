import React from 'react';
import './modal.scss';
import { ModalProps } from '../../types/ModalProps';

// Array of categories available for selection
const categories = [
  'Animals',
  'Sports',
  'Work',
  'Nature',
  'Technology',
  'Travel',
  'Fashion',
  'Art',
  'Music',
  'Cars',
  'Food',
];

// Define the Modal functional component
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, modalType, handleCategorySelect }) => {
  // Function to render the category selection modal
  const renderCategorySelectionModal = () => (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          X
        </span>
        <h3>Select Category</h3>
        {/* List of categories */}
        <ul>
          {categories.map((category, index) => (
            <li key={index} onClick={() => handleCategorySelect(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  // Function to render the image details modal
  const renderImageDetailsModal = () => (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          X
        </span>
        <h3>Image Details</h3>
        {/* Image details content */}
        {/* <div>
          <p>Views: {selectedImage.views}</p>
          <p>Downloads: {selectedImage.downloads}</p>
          <p>Collection: {selectedImage.collection}</p>
        </div> */}
      </div>
    </div>
  );

  // Render the appropriate modal based on modalType and isOpen state
  return isOpen
    ? modalType === 'categorySelection'
      ? renderCategorySelectionModal() // Render category selection modal
      : renderImageDetailsModal() // Render image details modal
    : null; // If isOpen is false, return null (modal is closed)
};

export default Modal;
