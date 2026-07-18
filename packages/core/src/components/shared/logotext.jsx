import * as React from "react";

/**
 * Corvenn wordmark logo.
 * - Dark square: #17171B
 * - Open ring "C" shape & cursor bar: var(--primary) (theme color)
 * - Text: currentColor (adapts to light/dark themes)
 */
const SVGComponent = (props) => (
    <svg
        viewBox="0 0 680 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Corvenn"
        role="img"
        {...props}
    >
        {/* Dark rounded square badge */}
        <rect x="15" y="15" width="190" height="190" rx="40" fill="#17171B" />

        {/* Abstract C ring */}
        <path
            d="M157.5,149.9 A62,62 0 1,1 157.5,70.1 L136.1,88.1 A34,34 0 1,0 136.1,131.9 Z"
            fill="var(--primary)"
        />

        {/* Cursor accent bar */}
        <rect x="160" y="100" width="8" height="20" rx="2" fill="var(--primary)" />

        {/* Wordmark text */}
        <text
            x="250"
            y="145"
            fontFamily="Arial, sans-serif"
            fontSize="96"
            fontWeight="500"
            fill="currentColor"
        >
            Corvenn
        </text>
    </svg>
);

export default SVGComponent;
