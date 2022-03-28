import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { IImage } from '../../models/Images.model';

const Caroussel = (props: { images: IImage[] }) => {
  const { images } = props;
  return (
    <>
      <h2>Which JarJar are you ?</h2>
      <Carousel width='350px' infiniteLoop centerMode>
        {images.map(({ file, label, key }: IImage) => {
          return (
            <div key={key}>
              <img src={file} alt={label} />
              <p className='legend'>{label}</p>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Caroussel;
