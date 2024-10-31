import { FC, useEffect, useRef, useCallback } from 'react';
import { List } from 'antd';
import RepositoryItem from './RepositoryItem';
import { observer } from 'mobx-react-lite';
import githubReposStore from '../../../app/model/githubReposStore';
import { throttle } from 'lodash';
import styles from './RepositoryList.module.css';

const RepositoriesList: FC = observer(() => {
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    githubReposStore.getRepositories();
  }, []);

  const handleScroll = useCallback(
    throttle(() => {
      if (githubReposStore.isLoading || !githubReposStore.hasMore) return;

      if (listRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = listRef.current;
        if (scrollHeight - scrollTop - clientHeight < 100) {
          githubReposStore.getRepositories();
        }
      }
    }, 200),
  []);

  return (
    <div
      ref={listRef}
      onScroll={handleScroll}
      style={{
        height: '80vh',
        overflowY: 'auto',
      }}
    >
      <List
        dataSource={githubReposStore.repositories}
        itemLayout='vertical'
        size='large'
        renderItem={(item) => (
          <RepositoryItem repository={item} />
        )}
        className={styles.list}
      />
    </div>
  );
});

export default RepositoriesList;
