import React from 'react';
import './styles.css';


const ExampleButton = ({ children }) => {
    return (
        <button class="btn btn--light">
            <span class="btn__inner">
                <span class="btn__slide"></span>
                <span class="btn__content">{children}</span>
            </span>
        </button>
    );
}

export default ExampleButton;