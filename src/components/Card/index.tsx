import React from 'react';

export interface ICard {
    children: React.ReactNode;
    className?: string;
}
const Card: React.FC<ICard> = ({
    children,
    className
}) => {
    return (
        <div className={`${className ?? "md:w-[250px] md:h-[300px] p-1 animate-bounceIn rounded-lg shadow-lg"}` }>
            {children}
        </div>
    );
}

export default Card;