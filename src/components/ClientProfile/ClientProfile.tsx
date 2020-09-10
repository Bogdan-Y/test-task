import React from 'react';
import SliderPhoto from '../SliderPhoto';
import Tag from '../Tag';
import {
  ClientProfileContent,
  ClientProfileDescription,
  ClientProfileTags,
  ClientProfileTitle,
  ClientProfileTop,
  ClientProfileGroup,
  GroupLabel,
  GroupContent,
  GroupContentTitle,
} from './styles';

const ClientProfile: React.FC = () => {
  const profileInfo = {
    photos: '',
    name: 'Margaret',
    age: '52',
    isOnline: true,
    description: 'I think I\'ve told everything about myself. I do not think my life is boring because every day confronted with something new and interesting for me',
    height: '7\'0.7\'',
    weight: '132 lbs',
    bodyType: 'Slim',
    hairColor: 'Blonde',
    education: 'High school',
    work: 'Journalist, best mom ever',
    location: '5 ml away',
    isVerified: true,
  };

  return (
    <>
      <ClientProfileTop>
        <SliderPhoto />
      </ClientProfileTop>
      <ClientProfileContent>
        <ClientProfileTitle>
          <span className="online">
            {profileInfo.name}, {profileInfo.age}
          </span>
        </ClientProfileTitle>

        <ClientProfileDescription>
          {profileInfo.description}
        </ClientProfileDescription>

        <ClientProfileTags>
          <Tag label={profileInfo.height} icon="icon-icon_height" isActive />
          <Tag label={profileInfo.weight} icon="icon-icon_weight" />
          <Tag label={profileInfo.bodyType} icon="icon-icon_bodytype" />
          <Tag label={profileInfo.hairColor} icon="icon-icon_haircolor" />
        </ClientProfileTags>

        <ClientProfileGroup>
          <GroupLabel>Education</GroupLabel>

          <GroupContent>
            <GroupContentTitle>{profileInfo.education}</GroupContentTitle>
          </GroupContent>
        </ClientProfileGroup>
        <ClientProfileGroup>
          <GroupLabel>Work</GroupLabel>

          <GroupContent>
            <GroupContentTitle>{profileInfo.work}</GroupContentTitle>
          </GroupContent>
        </ClientProfileGroup>
        <ClientProfileGroup>
          <GroupLabel>Current location</GroupLabel>

          <GroupContent>
            <GroupContentTitle>{profileInfo.location}</GroupContentTitle>
          </GroupContent>
        </ClientProfileGroup>
        <ClientProfileGroup>
          <GroupLabel>Verification</GroupLabel>

          <GroupContent>
            <GroupContentTitle>{profileInfo.name} is photo-verified</GroupContentTitle>
          </GroupContent>
        </ClientProfileGroup>
      </ClientProfileContent>
    </>
  );
};

export default ClientProfile;
