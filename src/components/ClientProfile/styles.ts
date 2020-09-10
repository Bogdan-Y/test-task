import styled from 'styled-components';

export  const ClientProfileTop = styled.div`
  position: relative;
  height: 360px;
`;

export  const ClientProfileContent = styled.div`
  position: relative;
  padding: 24px 24px 100px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin-top: -${(props) => props.theme.spacing[3]};
  background:  ${(props) => props.theme.colors.white};
  z-index: 1;
`;

export const ClientProfileTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: ${(props) => props.theme.spacing[3]};

  span {
    position: relative;
    padding-right: ${(props) => props.theme.spacing[3]};

    &.online:after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${(props) => props.theme.colors.success};
      top: 50%;
      right: 0;
      margin-top: -${(props) => props.theme.spacing[1]};;
    }
  }
`;

export  const ClientProfileDescription = styled.p`
  font-weight: 500;
  line-height: 24px;
  margin-bottom: ${(props) => props.theme.spacing[4]};
`;

export  const ClientProfileTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${(props) => props.theme.spacing[4]};
`;

export  const ClientProfileGroup = styled.div`
  margin-bottom: 24px;
`;

export  const GroupLabel = styled.div`
  font-size: 16px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
`;

export  const GroupContent = styled.div`
  display: flex;
`;

export  const GroupContentTitle = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
`;
