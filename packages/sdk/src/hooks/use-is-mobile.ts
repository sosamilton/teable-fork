import { useMedia } from 'react-use';

export const useIsMobile = () => {
  // Provide a default state for SSR
  return useMedia('(max-width: 640px)', false);
};
