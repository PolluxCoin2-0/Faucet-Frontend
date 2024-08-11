const BackgroundVideo = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <video
        className="w-full h-full object-cover"
        src="/Fire-Logoless.mp4" // Ensure the video is in the public directory
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    </div>
  );
};

export default BackgroundVideo;
