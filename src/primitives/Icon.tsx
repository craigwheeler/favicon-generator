import React from 'react';

import { AlignLeft, Dashboard, Help, Queues, Bell, Settings, DownTab } from '../assets/svg';

interface IProps {
  name: string;
  height: number;
  width: number;
  alt: string;
}

const Icon = (props: IProps): JSX.Element | null => {
  const { name } = props;
  const getIcon = () => {
    switch (name) {
      case 'align-left':
        return <AlignLeft {...props} />;
      case 'bell':
        return <Bell {...props} />;
      case 'dashboard':
        return <Dashboard {...props} />;
      case 'down-tab':
        return <DownTab {...props} />;
      case 'help':
        return <Help {...props} />;
      case 'queues':
        return <Queues {...props} />;
      case 'settings':
        return <Settings {...props} />;
      default:
        return null;
    }
  };

  return getIcon();
};

export default Icon;
