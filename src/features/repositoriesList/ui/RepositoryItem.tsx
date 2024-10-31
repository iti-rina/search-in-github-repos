import { List, Tag, Button, Badge } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import type { SimplifiedRepository} from '../../../app/api';
import { FC, useState } from 'react';
import { IconText } from '../../../shared/ui';
import { observer } from 'mobx-react-lite';

type RepositoryProps = {
  repository: SimplifiedRepository
}

const RepositoryItem: FC<RepositoryProps> = observer(({ repository }) => {
  const tag = repository.repository_language ? <Tag bordered={false} color='cyan'>{repository.repository_language}</Tag> : null;
  return (
    <Badge.Ribbon text={`Owner: ${repository.owner_login}`}>
      <List.Item
          actions={[
            <IconText icon={StarOutlined} text={`${repository?.stargazers_count}`} key='list-vertical-star-o' />,
            tag
          ]}
        >
          <List.Item.Meta
            title={<p>{repository?.name}</p>}
            description={<a href={repository?.html_url} target='_blank'>{repository?.html_url}</a>}
          />
        </List.Item>
    </Badge.Ribbon>
  );
})

export default RepositoryItem;