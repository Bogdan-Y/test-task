import React, { useEffect, useState } from 'react';
import { useGrpcApi } from '../../ApiContext';
import SliderPhoto from '../SliderPhoto';
import Tag from '../Tag';
import { IClientProfile } from '../../services/api/client-profile-api';
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
  const [profileInfo, setProfileInfo] = useState<IClientProfile | null>(null);

  const { clientProfile } = useGrpcApi();

  useEffect(() => {
    clientProfile.getById(1).then((profile: IClientProfile) => {
      setProfileInfo(profile);
    });
  }, [clientProfile]);

  return (
    <div>
      {profileInfo && (
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
              <Tag label={profileInfo.bodytype} icon="icon-icon_bodytype" />
              <Tag label={profileInfo.haircolor} icon="icon-icon_haircolor" />
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
      )}
    </div>
  );
};

export default ClientProfile;
