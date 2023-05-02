import Image from 'next/image';
import React from 'react';
import image1 from '../../public/Images/image1.png';

const BackImage = () => {
  return (
    <div className="w-screen h-screen">
        <Image
          src={image1}
          alt="background"
          className=" hidden lg:block w-full h-full xl: object-cover -z-10"
        />
    </div>
  );
};

export default BackImage;
