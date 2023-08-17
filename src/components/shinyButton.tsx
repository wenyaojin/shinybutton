import React from 'react';

export function ShinyButton(): JSX.Element {
  const reflectionRef = React.useRef(null);
  React.useEffect(() => {
    if (reflectionRef.current) {
      navigator.mediaDevices.getUserMedia({
        video: true
      }).then((stream) => {
        const video: any = reflectionRef.current;
        video!.srcObject = stream;
        video.onloadedmetadata = () => {
          console.log(
            "The duration and dimensions of the media and tracks are now known.",
          );
          console.log('Duration:', video.duration); // Access the duration
          console.log('Dimensions:', video.videoWidth + 'x' + video.videoHeight);
          video.play();
        };
      })
    }
  }, [reflectionRef])
  
  
  return (
    <div>
      <video ref={reflectionRef}></video>
    </div>
  )
}