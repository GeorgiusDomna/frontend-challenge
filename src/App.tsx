import { useEffect, useState } from 'react'
import { loadImages } from './api/documentService'
import { CatImage } from './interfaces/Icatimage';
import ImageItem from './components/ImageItem.tsx/ImageItem';
import './App.css'

const App: React.FC = () => {
  const [images, setImages] = useState<CatImage[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    (async () => {
      const res = await loadImages();
      res && setImages(res);
    })();
  }, [])

  const toggleFavoriteCat = (id: string) => {
    setImages(prevImages => {
      return prevImages.map(image => {
        if (image.id === id) {
          return { ...image, status: !image.status };
        }
        return image;
      });
    });
  };

  const loadData = async() => {
    const res = await loadImages();
    res && setImages((prev) => [ ...prev, ...res ]);
  }

  return (
    <div className='App'>
      <div className="header">
        <div className="navbar">
          <div onClick={() => setIsOpen(false)} className={!isOpen ? "navbar_item active" : "navbar_item"}>Все котики</div>
          <div onClick={() => setIsOpen(true)} className={isOpen ? "navbar_item active" : "navbar_item"}>Любимые котики</div>
        </div>
      </div>
      <div className="labary">
        {images &&
          images.filter((image) => isOpen ? image.status : true)
          .map((image) => (
            <ImageItem key={image.id} image={image} toggleFavoriteCat={toggleFavoriteCat} />
          ))
        }
      </div>
      <span onClick={loadData} className="pagination_btn">... загрузить ещё котиков ...</span>
    </div>
  )
}

export default App
