import Dude from "./assets/dude.png";
import India from "./assets/india.png";
import Cool from "./assets/cool.png";
import Bear from "./assets/bear.png";
import { PLanguageImgCanvas } from "./components/Project/Project.elements";

const getImageComponent = (imgPath) => {
  switch (imgPath) {
    case "../../assets/cool.png":
      return Cool;
    case "../../assets/dude.png":
      return Dude;
    case "../../assets/bear.png":
      return Bear;
    case "../../assets/india.png":
      return India;
    // ... other image cases
    default:
      return Dude; // default image
  }
};

const AvatarComponent = ({ imgPath }) => {
  const ImageToShow = getImageComponent(imgPath);
  return <PLanguageImgCanvas src={ImageToShow} alt="Avatar" />;
};

export default AvatarComponent;
