import { makeStyles } from '@griffel/react';

export const useStyles = makeStyles({
  container: {
    width: '300px',
    height: '100px',
    position: 'absolute',
    left: '50%',
    top: '50%'
  },
  detailContainer: {
    position: 'absolute',
    zIndex: "1"
  },
  video: {
    width: '100%',
    height: '100px',
    position: 'absolute',
    left: '50%',
    top: '50%',
    "border-radius": '100px',
    transform: "translate(-50%, -50%) scaleX(-1)",
    filter: "blur(3px)",
    opacity: "0.7",
    "object-fit": 'fill',
    // filter: blur(24px);
    // opacity: 0.35;
  },
  text: {
    position: 'relative',
    color: 'rgba(0, 0, 0, 0.7)',
    left: '50%',
    top: '50%',
    fontSize: '48px',
    fontWeight: '500',
    transform: "translate(-50%, -50%)",
    filter: "drop-shadow(0px -1px 0px rgba(255, 255, 255, 0.5)) drop-shadow(0px 1px 0px rgba(255, 255, 255, 0.6))",
    cursor: 'pointer',
    'backdrop-filter': 'blur(2px)'
  }
}) 