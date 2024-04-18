import { PixabayImage } from '../types/PixabayImage';

export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE';

export const selectCategory = (category: string) => ({
  type: SELECT_CATEGORY,
  payload: category,
});

export const fetchImagesSuccess = (images: PixabayImage[]) => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: images,
});

export const fetchImagesFailure = (error: any) => ({
  type: FETCH_IMAGES_FAILURE,
  payload: error,
});
