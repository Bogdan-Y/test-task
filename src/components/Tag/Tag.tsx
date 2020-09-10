import React from 'react';
import { TagContainer } from './styles';

interface TagProps {
  label: string,
  icon?: string,
  isActive?: boolean
}

const Tag: React.FC<TagProps> = (props) => {
  const { label, icon, isActive } = props;

  const isTagActive = isActive ? 'active' : '';

  return (
    <TagContainer className={isTagActive}>
      {icon && <i className={icon} />}
      <span>{label}</span>
    </TagContainer>
  );
};

export default Tag;
