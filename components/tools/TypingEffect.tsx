import React from 'react';
import Typed from 'react-typed';

const TypingEffect = () => {
    const strings = [
        '<span class="text-primary">Website</span>',
        '<span class="text-primary">Application</span>',
        '<span class="text-primary">E-Commerse Stores</span>',
      ];
  return (
    <Typed
      strings={strings}
      typeSpeed={50}
      backSpeed={30}
      backDelay={1000}
      loop
    />
  );
};

export default TypingEffect;
