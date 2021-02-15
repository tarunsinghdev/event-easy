import React, { useState } from 'react';
import { Tab } from 'semantic-ui-react';
import AboutTab from './AboutTab';
import EventsTab from './EventsTab';
import PhotosTab from './PhotosTab';
import FollowingTab from './FollowingTab';

const ProfileContent = ({ profile, isCurrentUser }) => {
  const [activeTab, setActiveTab] = useState(0);
  const panes = [
    {
      menuItem: 'About',
      render: () => (
        <Tab.Pane>
          <AboutTab profile={profile} isCurrentUser={isCurrentUser} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Photos',
      render: () => (
        <PhotosTab profile={profile} isCurrentUser={isCurrentUser} />
      ),
    },
    { menuItem: 'Events', render: () => <EventsTab profile={profile} /> },
    {
      menuItem: 'Followers',
      render: () => (
        <FollowingTab
          key={profile.id}
          profile={profile}
          activeTab={activeTab}
        />
      ),
    },
    {
      menuItem: 'Following',
      render: () => (
        <FollowingTab
          key={profile.id}
          profile={profile}
          activeTab={activeTab}
        />
      ),
    },
  ];
  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition="right"
      panes={panes}
      onTabChange={(e, data) => setActiveTab(data.activeIndex)}
    />
  );
};

export default ProfileContent;
