import React from 'react';
import icon_loader from '../../../images/common/icon_loader.gif';

export const Loading: React.FunctionComponent = () => (
  <div className="c-loading">
    <img src={icon_loader} />
  </div>
);
