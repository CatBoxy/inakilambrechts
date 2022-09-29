import { useState, useEffect } from 'react';

export function useIsIFrameLoaded(iframeRef){
  const [isIFrameLoaded, setIsIFrameLoaded] = useState(false);
  const iframeCurrent = iframeRef.current;
  useEffect(() => {
    iframeCurrent?.addEventListener('load', () => setIsIFrameLoaded(true));
    return () => {
      iframeCurrent?.removeEventListener('load', () => setIsIFrameLoaded(true));
    };
  }, [iframeCurrent]);
  return isIFrameLoaded;
};