import { useState, useEffect, useCallback } from 'react';

const useKeyboardNavigation = (itemCount: number) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        setSelectedIndex(prevIndex => Math.min(prevIndex + 1, itemCount - 1));
      } else if (e.key === 'ArrowUp') {
        setSelectedIndex(prevIndex => Math.max(prevIndex - 1, 0));
      }
    },
    [itemCount],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return { selectedIndex, setSelectedIndex };
};

export default useKeyboardNavigation;
