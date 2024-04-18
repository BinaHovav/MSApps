import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Button from './components/button/Button';
import Modal from './components/modal/Modal';
import ImageContainer from './components/imageContainer/ImageContainer';
import { selectCategory, fetchImagesSuccess, fetchImagesFailure } from './store/actions'; // Import action creators
import { PixabayImage } from './types/PixabayImage';
import ImgService from './ImgService'; // Import ImgService for fetching images
import { AppProps } from './types/AppProps';

// Define the main App component
const App: React.FC<AppProps> = ({
  selectedCategory, // Currently selected category from Redux store
  selectCategory, // Action creator to select a category
  images, // Array of images from Redux store
  fetchImagesSuccess, // Action creator to fetch images successfully
  fetchImagesFailure, // Action creator to handle fetch images failure
}) => {
  // Define state variables
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state
  const [modalType, setModalType] = useState<'categorySelection' | 'imageDetails'>(
    'categorySelection'
  ); // Type of modal (category selection or image details)
  const [selectedImage, setSelectedImage] = useState<PixabayImage | null>(null); // Selected image details

  // Fetch images when selectedCategory or currentPage changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch images from ImgService based on selected category and current page
        const data = await ImgService.fetchImages(selectedCategory, currentPage);
        // Dispatch action to store the fetched images
        fetchImagesSuccess(data.hits.slice(0, 9)); // Store only the first 9 images
      } catch (error) {
        // Dispatch action to handle fetch images failure
        fetchImagesFailure(error);
      }
    };

    fetchData(); // Invoke fetchData function when selectedCategory or currentPage changes
  }, [selectedCategory, currentPage]);

  // Event handler for clicking the Previous button
  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); // Decrement currentPage, ensuring it doesn't go below 1
  };

  // Event handler for clicking the Next button
  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1); // Increment currentPage
  };

  // Event handler for opening the modal
  const openModal = () => {
    setIsModalOpen(true); // Set isModalOpen state to true
    setModalType('categorySelection'); // Set modalType to 'categorySelection' for category selection modal
  };

  // Event handler for closing the modal
  const closeModal = () => {
    setIsModalOpen(false); // Set isModalOpen state to false
  };

  // Event handler for clicking on an image
  const handleImageClick = (clickedImage: PixabayImage) => {
    setSelectedImage(clickedImage); // Set selectedImage state to the clicked image
    setIsModalOpen(true); // Open the modal
    setModalType('imageDetails'); // Set modalType to 'imageDetails' for image details modal
  };

  // Event handler for selecting a category
  const handleCategorySelect = async (category: string) => {
    setIsModalOpen(false); // Close the modal after category selection

    try {
      // Fetch images for the selected category and reset to the first page
      const data = await ImgService.fetchImages(category, 1);
      // Dispatch action to select the category and store the fetched images
      selectCategory(category);
      fetchImagesSuccess(data.hits.slice(0, 9)); // Store only the first 9 images
    } catch (error) {
      // Dispatch action to handle fetch images failure
      fetchImagesFailure(error);
    }
  };

  // Render the main component
  return (
    <main>
      <header>
        <Button className="select-button" onClick={openModal}>
          Select Picture Category
        </Button>
      </header>
      <div className="container">
        <div className="button-container">
          <Button onClick={handlePrevClick} disabled={currentPage === 1}>
            Prev
          </Button>
          <Button onClick={handleNextClick}>Next</Button>
        </div>
        <ImageContainer images={images} onImageClick={handleImageClick} />
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          handleCategorySelect={handleCategorySelect}
          selectedImage={selectedImage}
          modalType={modalType}
        />
      </div>
    </main>
  );
};

// Map state to props to access selectedCategory and images from Redux store
const mapStateToProps = (state: any) => ({
  selectedCategory: state.selectedCategory, // Currently selected category
  images: state.images, // Array of images
});

// Connect the App component to the Redux store and export it
export default connect(mapStateToProps, {
  selectCategory, // Action creator to select a category
  fetchImagesSuccess, // Action creator to fetch images successfully
  fetchImagesFailure, // Action creator to handle fetch images failure
})(App);
