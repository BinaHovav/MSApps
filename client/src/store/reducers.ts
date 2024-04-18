import { combineReducers } from '@reduxjs/toolkit';
import { SELECT_CATEGORY, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE } from './actions';
import { PixabayImage } from '../types/PixabayImage';

interface ImagesState {
  selectedCategory: string;
  images: PixabayImage[];
}

const initialImagesState: ImagesState = {
  selectedCategory: '',
  images: [],
};

const selectedCategoryReducer = (state = initialImagesState.selectedCategory, action: any) => {
  if (action.type === SELECT_CATEGORY) {
    console.log('action.type1', action.type);
    console.log('action.payload', action.payload);
    return action.payload;
  } else {
    return state;
  }
};

const imagesReducer = (state = initialImagesState.images, action: any) => {
  if (action.type === FETCH_IMAGES_SUCCESS) {
    console.log('action.type2', action.type);
    console.log('action.payload', action.payload);
    return action.payload;
  } else if (action.type === FETCH_IMAGES_FAILURE) {
    console.error('Error fetching images:');
    return {
      ...state,
      error: action.payload.message,
    };
  } else {
    return state;
  }
};

const rootReducer = combineReducers({
  selectedCategory: selectedCategoryReducer,
  images: imagesReducer,
});

export default rootReducer;
