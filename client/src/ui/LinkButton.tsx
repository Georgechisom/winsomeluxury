import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface Props {
    showButton?: boolean;
    link?: string;
    className?: string;
}

const LinkButton = ({ showButton, link, className }: Props) => {
    const newClassName = twMerge("bg-skyText/80 hover:bg-white hover:border hover:border-skyText hover:text-skyText text-whiteText py-3 px-6 rounded-full flex items-center gap-2 duration-200 w-full justify-center font-semibold", className);
  return (
    <Link to={link ? link : "/products"} className={newClassName}>
        Start Shopping {showButton && <FaArrowRight />}
    </Link>
  );
};

export default LinkButton