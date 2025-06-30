import React from 'react';

const Banner = () => {
    return (
        <div className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
             style={{ backgroundImage: `url(/banner.jpg)` }}>
            {/* Full image overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>

            {/* Content container (without background) */}
            <div className="relative z-10 p-6 rounded-2xl text-center max-w-7xl ">
                <h1 className="text-7xl  mb-2 font-script">Give yourself a refreshing start</h1>
            </div>
        </div>
    );
};

export default Banner;