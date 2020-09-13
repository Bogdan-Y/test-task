import React from 'react';
import {
  SliderPhotoContainer,
  SliderPhotoFooter,
  SliderPhotoImg,
  SliderPhotoIndicators,
} from './styles';

interface SliderPhotoProps {
  photos: string[];
}

const SliderPhoto: React.FC<SliderPhotoProps> = ({ photos }) => (
  <SliderPhotoContainer>
    <div>
      <SliderPhotoImg src={photos[0]} alt="slider photo" />
    </div>

    <SliderPhotoFooter>
      <SliderPhotoIndicators>
        <li className="active" />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </SliderPhotoIndicators>
    </SliderPhotoFooter>
  </SliderPhotoContainer>
);

export default SliderPhoto;
