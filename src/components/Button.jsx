import React from 'react';

const Button = ({ children, variant = 'primary', onClick }) => {
  const baseStyle = "flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 active:scale-95 cursor-pointer";

  const variants = {
    primary: "text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:shadow-xl hover:shadow-purple-500/20",
    outline: "border-2 border-gray-200 text-gray-700 hover:border-purple-500 hover:text-purple-600 bg-white"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;