import styled from 'styled-components';

export const ClientProfileTop = styled.div(() => `
  position: relative;
  height: 360px;
`);

export const ClientProfileContent = styled.div(({ theme: { spacing, colors } }) => `
  position: relative;
  padding: ${spacing[4]} ${spacing[4]} 100px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin-top: -${spacing[3]};
  background:  ${colors.white};
  z-index: 1;
`);

export const ClientProfileTitle = styled.div(({ theme: { spacing, colors } }) => `
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: ${spacing[3]};

  span {
    position: relative;
    padding-right: ${spacing[3]};

    &.online:after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${colors.success};
      top: 50%;
      right: 0;
      margin-top: -${spacing[1]};;
    }
  }
`);

export const ClientProfileDescription = styled.p(({ theme: { spacing } }) => `
  font-weight: 500;
  line-height: 24px;
  margin-bottom: ${spacing[4]};
`);

export const ClientProfileTags = styled.div(({ theme: { spacing } }) => `
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${spacing[4]};
`);

export const ClientProfileGroup = styled.div(({ theme: { spacing } }) => `
  margin-bottom: ${spacing[4]};
`);

export const GroupLabel = styled.div(() => `
  font-size: 16px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
`);

export const GroupContent = styled.div(() => `
  display: flex;
`);

export const GroupContentTitle = styled.div(() => `
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
`);
