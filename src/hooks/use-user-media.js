import { useState, useEffect } from "react";

export function useUserMedia(requestedMedia) {
  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    async function enableVideoStream() {
      try {
        if (!navigator.mediaDevices) {
          alert("no media")
          console.log("Sorry, getUserMedia is not supported");
          return;
        }

        const stream = await navigator.mediaDevices.getUserMedia(
          {video : true}
          // requestedMedia
        );
        console.log('srtream :>> ', stream);
        setMediaStream(stream);
      } catch (err) {
        // Handle the error
      }
    }

    if (!mediaStream) {
      enableVideoStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach(track => {
          track.stop();
        });
      };
    }
  }, [mediaStream, requestedMedia]);

  return mediaStream;
}
