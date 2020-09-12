import React from 'react';
import {
  SliderPhotoContainer,
  SliderPhotoFooter,
  SliderPhotoImg,
  SliderPhotoIndicators,
} from './styles';

const SliderPhoto: React.FC = () => {
  return (
    <SliderPhotoContainer>
      <div>
        <SliderPhotoImg src="./assets/profile-slider-photo.png" alt="slider photo" />
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
};

export default SliderPhoto;
