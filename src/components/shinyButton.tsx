import React from 'react';
import { useStyles } from './shinyButton.styles';

export function ShinyButton(props: any): JSX.Element {
  const reflectionRef = React.useRef(null);
  const styles = useStyles();
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
    <div className={styles.container}>
      {/* <div className={styles.detailContainer}> */}
        <video className={styles.video} ref={reflectionRef}></video>
        <div className={styles.text}>{props.children}</div>
      {/* </div> */}
    </div>
  )
}