import { ReactNode } from 'react';

import { MapUpperBar, MapLowerBar } from './components';

type IChildrenType = {
  children: ReactNode;
};

const defaultProps = {
  text: 'On the way...',
  subtext: `Let's go with your shipment...`,
};

export const MapLayout = ({ children }: IChildrenType) => {
  return (
    <>
      <MapUpperBar {...defaultProps} />
      <div style={{ maxWidth: '100%', minHeight: '70vh' }}>{children}</div>
      <MapLowerBar />
    </>
  );
};
