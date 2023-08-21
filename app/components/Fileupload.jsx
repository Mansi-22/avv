"use client"
// import React, { useState } from 'react';

// const ImageUploadForm = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [previewImage, setPreviewImage] = useState(null);

//   const handleImageChange = (event) => {
//     const imageFile = event.target.files[0];
//     setSelectedImage(imageFile);

//     // Display a preview of the selected image
//     const reader = new FileReader();
//     reader.onload = () => {
//       setPreviewImage(reader.result);
//     };
//     reader.readAsDataURL(imageFile);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Perform your upload logic here (e.g., send image to server)
//     if (selectedImage) {
//       console.log('Image selected:', selectedImage);
//       // Clear selected image and preview
//       setSelectedImage(null);
//       setPreviewImage(null);
//     }
//   };

//   return (
//     <div>
//       <h2>Image Upload</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="image">Select an Image:</label>
//           <input
//             type="file"
//             id="image"
//             accept="image/*"
//             onChange={handleImageChange}
//           />
//         </div>
//         {previewImage && (
//           <div>
//             <h3>Preview:</h3>
//             <img src={previewImage} alt="Preview" style={{ maxWidth: '100%' }} />
//           </div>
//         )}
//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// };

// export default ImageUploadForm;
import React, { useState } from 'react';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = () => {
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        localStorage.setItem('uploadedImage', imageData);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUpload;