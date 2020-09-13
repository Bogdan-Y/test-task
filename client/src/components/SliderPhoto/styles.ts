import styled from 'styled-components';

export const SliderPhotoContainer = styled.div(() => `
  position: relative;
  height: 360px;
`);

export const SliderPhotoImg = styled.img(() => `
  position: relative;
  display: block;
  height: 360px;
  margin: 0 auto;
`);

export const SliderPhotoFooter = styled.div(({ theme: { spacing } }) => `
  position: absolute;
  bottom: 8px;
  left: 0;
  width: 100%;
  padding-bottom: ${spacing[4]};
`);

export const SliderPhotoIndicators = styled.ul(({ theme: { spacing, colors } }) => `
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  height: ${spacing[1]};

  li {
    width: 35px;
    height: ${spacing[1]};
    background: ${colors.backgroundContrast};
    margin: 0 2px;
    border-radius: 1px;

    &.active {
      background-color: ${colors.white};
    }
  }
`);
