import { FC, useEffect, useRef } from 'react';
import { List } from 'antd';
import RepositoryItem from './RepositoryItem';
import { observer } from 'mobx-react-lite';
import githubReposStore from '../../../app/model/githubReposStore';
import { throttle } from 'lodash';
import styles from './RepositoryList.module.css';

const RepositoriesList: FC = observer(() => {
  const { isLoading, hasMore } = githubReposStore;
  const listRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
    ref={listRef}
    className={styles.wrapper}
    >
      <List
        dataSource={githubReposStore.repositories}
        itemLayout='vertical'
        size='large'
        renderItem={(item) => (
          <RepositoryItem repository={item} />
        )}
      />
    </div>
  );
});

export default RepositoriesList;