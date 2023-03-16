import React, { createRef, useState } from "react";

const ImageFileSelector = (props) => {
  const [image, _setImage] = useState();
  const inputFileRef = createRef();

  const cleanUp = () => {
    URL.revokeObjectURL(image && props.image);
    inputFileRef.current.value = null;
  };

  const setImage = (newImage) => {
    if (image) {
      cleanUp();
    }
    _setImage(newImage);
  };

  const handleOnChange = (event) => {
    const newImage = event.target.files[0];
    if (newImage) {
      setImage(URL.createObjectURL(newImage));
    }
    props.imagePreview(event);
  };

  return (
    <div className="container m-2 d-flex flex-column justify-content-center align-items-center border border-1 rounded">
      {/* img element for Image Preview */}

      <img src={image} alt="" className="w-50 m-2" />

      <input
        ref={inputFileRef}
        accept="image/*"
        hidden
        id="imageFileSelector"
        type="file"
        onChange={handleOnChange}
      />
      <label htmlFor="imageFileSelector">
        <span className="btn border-1">
          <i class="bi bi-camera-fill me-2"></i>
          {image ? "Change Image" : "Select Image"}
        </span>
      </label>
    
    </div>
  );
};

export default ImageFileSelector;
