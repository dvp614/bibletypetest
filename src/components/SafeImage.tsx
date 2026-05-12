import React, { useState, useEffect } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  blur?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({ 
  src, 
  fallbackSrc, 
  blur, 
  className, 
  alt, 
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const handleError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      referrerPolicy="no-referrer"
      className={`${className} ${blur ? 'blur-2xl scale-125' : ''}`}
      {...props}
    />
  );
};
