import React from 'react';

const ImageDisplay = () => {
  const imageData = localStorage.getItem('uploadedImage');

  return (
    <div>
      {imageData && <img src={imageData} alt="Uploaded" />}
    </div>
  );
};

export default ImageDisplay;