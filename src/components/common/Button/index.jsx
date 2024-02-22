import React from 'react';

const Button = ({ text, type, size, onClick }) => {
  const applyStyles = (type, size) => {
    const bg = type === 'primary' ? 'bg-secondary' : 'bg-white';
    const color = type === 'primary' ? 'text-white' : 'text-secondary';
    const height = size === 'lg' ? 'h-[60px] md:h-[75px]' : 'h-[51px]';
    const width = size === 'lg' ? 'min-w-full md:min-w-[422px]' : 'min-w-full min-w-[218px]';
    const fontSize =
      size === 'lg' ? 'text-[18px] md:text-[30px] font-bold' : 'text-[16px] font-semibold';
    return `${bg} ${color} ${width} ${height} ${fontSize} rounded-full px-8 uppercase `;
  };
  return <button className={applyStyles(type, size)}>{text}</button>;
};

export default Button;
