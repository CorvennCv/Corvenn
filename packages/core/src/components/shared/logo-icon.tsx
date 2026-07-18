import * as React from "react";

/**
 * Corvenn icon mark.
 * - Dark square: fixed #17171B (brand identity, always dark)
 * - C ring + cursor bar: var(--primary) — inherits app teal
 * - Scales via className (e.g. "w-10 h-10")
 */
const LogoIcon = (props: any) => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    {/* Dark rounded square */}
    <rect width={56} height={56} rx={13} fill="#17171B" />

    {/*
      Thick open-ring C shape:
      Outer arc radius 16, inner arc radius 8.8, centered at (28,28).
      Opening faces right at ±40° from horizontal.
      Path: move to lower-outer → large outer arc → line to inner-upper → large inner arc → close
    */}
    <path
      d="M40.3,38.3 A16,16 0 1,1 40.3,17.7 L34.7,22.3 A8.8,8.8 0 1,0 34.7,33.7 Z"
      fill="var(--primary)"
    />

    {/* Cursor-like accent bar at the opening of the C */}
    <rect x={42} y={24} width={2.5} height={8} rx={0.8} fill="var(--primary)" />
  </svg>
);

export default LogoIcon;
