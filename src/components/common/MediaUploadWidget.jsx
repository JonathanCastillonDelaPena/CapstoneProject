import React from "react";
import { useEffect, useRef } from "react";

const MediaUploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dbjikdtuj",
        uploadPreset: "fqcvzfmr",
      },
      function (error, result) {
        console.log(result);
      }
    );
  }, []);

  return (
    <button
      className="btn btn-primary"
      onClick={() => widgetRef.current.open()}
    >
      Upload Media
    </button>
  );
};

export default MediaUploadWidget;
