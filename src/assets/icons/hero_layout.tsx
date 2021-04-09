import React from 'react';

export const HeroOverlaySVG = ({
  color = 'currentColor', height = '525px'
}) => {
  return (
      <svg  height={height} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1371 690">
          <path  d="M0 0h1371v690H0z"/>
          <g clip-path="url(#clip0)">
              <path d="M0 0h1371v690H0z"/>
              <path fill="url(#paint0_linear)" d="M509 690H-61L669 0 509 690z"/>
              <path fill="url(#paint1_linear)" d="M510 690H-60L510 12v678z"/>
              <g filter="url(#filter0_d)">
                  <path fill="url(#paint2_linear)" d="M-2 0h671L-2 690V0z"/>
              </g>
          </g>
          <defs>
              <filter id="filter0_d" width="721" height="740" x="-23" y="-21" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="4" dy="4"/>
                  <feGaussianBlur stdDeviation="12.5"/>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                  <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
              <linearGradient id="paint0_linear" x1="552" x2="387" y1="562.5" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#2E2E2E"/>
                  <stop offset="1" stop-color="#4E4C4C"/>
              </linearGradient>
              <linearGradient id="paint1_linear" x1="225" x2="442.684" y1="690" y2="98.907" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#ff9944"/>
                  <stop offset="1" stop-color="#ff9944"/>
              </linearGradient>
              <linearGradient id="paint2_linear" x1="82.758" x2="341.125" y1="0" y2="585.814" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#ff9944"/>
                  <stop offset="1" stop-color="#ff9944"/>
              </linearGradient>
              <clipPath id="clip0">
              <path fill="#fff" d="M0 0h1371v690H0z"/>
              </clipPath>
          </defs>
      </svg>
  );
};

