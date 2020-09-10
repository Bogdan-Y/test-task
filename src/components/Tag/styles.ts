import styled from 'styled-components';

export const TagContainer = styled.div`
  display: flex;
  margin: 0 8px 8px 0;
  align-items: center;
  padding: 8px 8px 8px 10px;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textSecondary};
  
  i {
    margin-right: 8px;
    height: 16px;
  }
  
  &.active {
    background: #2196F3;
    color: #fff;
  }
`;
