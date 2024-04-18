import { PixabayImage } from './PixabayImage';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleCategorySelect: (category: string) => void;
  modalType: 'categorySelection' | 'imageDetails';
  selectedImage: PixabayImage | null;
}
