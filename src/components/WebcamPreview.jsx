import { useEffect, useRef } from "react";

const WebcamPreview = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  if (!stream) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-48 h-36 bg-black rounded-lg overflow-hidden border-2 border-white shadow-2xl animate-fade-in">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        Live
      </div>
    </div>
  );
};

export default WebcamPreview;