import { useState, useEffect } from "react";

type Props = {
  src: string;
  className: string;
  alt?: string;
};

const PreloadImg = ({ src, className, alt }: Props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoaded(true);
    };
    img.src = src;

    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <div>
      {loaded ? (
        <img src={src} alt={alt ? alt : "img-loaded"} className={className} />
      ) : (
        <img src={"./Programador.jpg"} alt={alt ? alt : "Preloading"} className={className} />
      )}
    </div>
  );
};

export default PreloadImg;
