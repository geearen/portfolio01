const PhotoGallery = () => {
  return (
    <div className="photos-container">
      <h1>Photos</h1>
      <div className="circle">
        <h1>
          <span>Under</span>
          <br />
          <span>Construction</span>
        </h1>
      </div>
      <h1>Photobook Project</h1>
      <iframe
        src="https://drive.google.com/file/d/1OjY5WBdLLC0JNV1Q8c_C2UGn58HhJgoH/preview"
        width="640"
        height="480"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default PhotoGallery;
