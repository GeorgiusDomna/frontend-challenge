import { CatImage } from "../../interfaces/Icatimage";

interface ImageItemProps {
  image: CatImage;
  toggleFavoriteCat: (id: string) => void;
}

const ImageItem: React.FC<ImageItemProps> = ({ image, toggleFavoriteCat }) => {

  return (
    <div className="labery_item">
      <img src={image.url} alt="cat" />
      <div onClick={() => toggleFavoriteCat(image.id)} className={image.status ? "favorite_btn active_img" : "favorite_btn"}></div>
    </div>
  )
}

export default ImageItem;