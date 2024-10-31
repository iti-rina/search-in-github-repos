import React, { FC } from 'react';
import { Space } from 'antd';

type IconTextProps = {
  icon: React.FC;
  text: string 
}

const IconText:FC<IconTextProps> = ({ icon, text }) => {
  return (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>

  );
};

export default IconText;

