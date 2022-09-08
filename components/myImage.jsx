import React, { useState } from 'react';
import Image from 'next/image';
import { Skeleton2 } from '../styles/MyImageStyles';

export const MyImage = ({ css, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                {!isLoaded && <Skeleton2/>}
                <Image
                    layout='fill'
                    objectFit='cover'
                    quality='100'
                    sizes="(min-width: 768px) 50vw, 100vw"
                    {...props}
                    onLoadingComplete={() => setIsLoaded(true)}
                />
            </div>
        </>
    );
};