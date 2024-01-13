import React, { ReactNode, ReactElement } from 'react';
import Link from "next/link";

interface CardProps {
    icons: ReactElement;
    content: ReactNode;
    documentationLink: ReactNode;
}

const Card: React.FC<CardProps> = ({ icons, content , documentationLink }) => {
    const linkHref = String(documentationLink);
    return (
        <div className="card p-5 rounded transition-transform transform-gpu hover:translate-y-[-10px] hover:shadow-dark cursor-pointer" style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
            <Link href={linkHref} target='_blank'>

            <h3 className='w-full flex justify-center'>{icons}</h3>
            <p className='text-center text-base !leading-relaxed text-body-color md:text-lg'>{content}</p>
            </Link>
        </div>
    );
};

export default Card;
