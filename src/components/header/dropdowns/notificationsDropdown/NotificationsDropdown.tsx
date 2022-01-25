import React, { useState } from 'react';
import { Dropdown } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { NotificationsOverlay, NotificationType } from './NotificationsOverlay/NotificationsOverlay';
import { Badge } from 'components/common/Badge/Badge';
import { DropdownHeader } from '../../Header/Header.styles';

export const NotificationsDropdown: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  return (
    <Dropdown
      trigger={['click']}
      overlay={<NotificationsOverlay notifications={notifications} setNotifications={setNotifications} />}
    >
      <DropdownHeader>
        <Badge dot>
          <BellOutlined />
        </Badge>
      </DropdownHeader>
    </Dropdown>
  );
};
