import { PixabayImage } from './PixabayImage';

export interface AppProps {
  selectedCategory: string;
  images: PixabayImage[];
  selectCategory: (category: string) => void;
  fetchImagesSuccess: (images: PixabayImage[]) => void;
  fetchImagesFailure: (error: any) => void;
}
