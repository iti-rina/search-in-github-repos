import { List, Tag, Button, Badge } from 'antd';
import { StarOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { SimplifiedRepository} from '../../../app/api';
import { FC, useState } from 'react';
import { IconText } from '../../../shared/ui';
import { observer } from 'mobx-react-lite';
import githubReposStore from '../../../app/model/githubReposStore';
import EditRepositoryModal from '../../EditRepository/ui/EditRepositoryModal';
import styles from './RepositoryList.module.css'

type RepositoryProps = {
  repository: SimplifiedRepository
}

const RepositoryItem: FC<RepositoryProps> = observer(({ repository }) => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const handleDelete = (id: number) => {
    githubReposStore.deleteRepository(id);
  };

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
          <div className={styles.buttons}>
            <Button type='primary' onClick={showModal} shape='circle'>
              <EditOutlined />
            </Button>
            <Button type='primary' onClick={handleDelete} shape='circle' danger ghost>
              <DeleteOutlined />
            </Button>
          </div>
          <EditRepositoryModal isOpen={open} onCancel={handleCancel} onOk={handleOk} repositoryId={repository.id}/>
        </List.Item>
    </Badge.Ribbon>
  );
})

export default RepositoryItem;