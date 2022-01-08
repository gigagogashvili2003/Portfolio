import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImages = ({ alt, width, src, className }) => {
  return (
    <>
      <LazyLoadImage
        className={className}
        alt={alt}
        src={src}
        effect="blur"
        width={width}
      />
    </>
  );
};

export default LazyImages;
