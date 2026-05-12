import { useEffect } from 'react';
import { CHARACTERS } from '../constants';

export function useImagePreload(state: 'START' | 'TEST' | 'RESULT') {
  useEffect(() => {
    // Only start preloading if the user is taking the test. 
    // This way we don't block the initial page load on the root domain.
    if (state === 'TEST') {
      const urlsToPreload = Object.values(CHARACTERS).flatMap(c => [c.imageUrl, c.resultImageUrl]);
      urlsToPreload.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    }
  }, [state]);
}
