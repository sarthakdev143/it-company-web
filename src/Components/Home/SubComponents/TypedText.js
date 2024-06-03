import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const TypedText = ({ strings }) => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings,
            typeSpeed: 70,
            backSpeed: 35,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, [strings]);

    return <span ref={el} />;
};

export default TypedText;
