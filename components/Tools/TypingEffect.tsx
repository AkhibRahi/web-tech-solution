import React from 'react'
import Typed from 'react-typed';

const TypingEffect = () => {
    const strings = ['<span class="text-primary">Websites</span>',
        '<span class="text-primary">Applications</span>',
        '<span class="text-primary">E-commerce Stores</span>',
        '<span class="text-primary">WebApps</span>',];
    return (
        <Typed
            strings={strings}
            typeSpeed={50} // Adjust typing speed as needed
            backSpeed={30} // Adjust backspacing speed as needed
            backDelay={1000} // Adjust pause before starting to type the next string
            loop
        />
    )
}

export default TypingEffect
