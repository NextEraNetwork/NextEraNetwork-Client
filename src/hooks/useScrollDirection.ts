import { useState, useEffect } from 'react';

const useScrollDirection = (): 'up' | 'down' | null => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection); 

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
};

export default useScrollDirection;


// import { useState, useEffect } from 'react';

// const useScrollDirection = (): 'up' | 'down' | null => {
//   const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);

//   useEffect(() => {
//     let lastScrollY = window.scrollY; // Use scrollY instead of pageYOffset

//     const updateScrollDirection = () => {
//       const scrollY = window.scrollY;

//       // Determine the direction of scroll
//       if (Math.abs(scrollY - lastScrollY) > 10) { // Only update if the difference is significant
//         const direction = scrollY > lastScrollY ? 'down' : 'up';
//         setScrollDirection(direction);
//       }

//       // Update lastScrollY for the next event
//       lastScrollY = scrollY;
//     };

//     window.addEventListener('scroll', updateScrollDirection);

//     return () => {
//       window.removeEventListener('scroll', updateScrollDirection);
//     };
//   }, []); // Empty dependency array to run once

//   return scrollDirection;
// };

// export default useScrollDirection;
