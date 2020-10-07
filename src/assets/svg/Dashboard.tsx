import React from 'react';

export default function Dashboard(props?: any): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fal"
      data-icon="border-all"
      className="svg-inline--fa fa-border-all fa-w-14"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={448}
      height={512}
      {...props}
    >
      <path
        fill="currentColor"
        d="M432 32H16A16 16 0 0 0 0 48v416a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM32 64h176v176H32zm0 384V272h176v176zm384 0H240V272h176zm0-208H240V64h176z"
      />
    </svg>
  );
}
