// An Img Service that will fetch either the list of images, or the image details

class ImgService {
  static async fetchImages(selectedCategory: string, currentPage: number): Promise<any> {
    const url = `http://localhost:3001/images?page=${currentPage}&category=${selectedCategory}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    } catch (error) {
      throw new Error(`There was a problem with the fetch operation: ${error}`);
    }
  }

  static async fetchImageDetails(imageId: number): Promise<any> {
    const url = `http://localhost:3001/images/${imageId}`; // Assuming this endpoint fetches details of a single image
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    } catch (error) {
      throw new Error(`There was a problem with the fetch operation: ${error}`);
    }
  }
}

export default ImgService;
