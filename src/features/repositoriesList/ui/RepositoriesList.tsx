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
  
  useEffect(() => {
      githubReposStore.getRepositories();
  
      const handleScroll = throttle(() => {
        if (isLoading || !hasMore) return;
  
        if (listRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = listRef.current;
          if (scrollHeight - scrollTop - clientHeight < 100) {
            githubReposStore.getRepositories();
          }
        }
      }, 200);
  
      const currentRef = listRef.current;
      if (currentRef) {
        currentRef.addEventListener('scroll', handleScroll);
      } else {
        window.addEventListener('scroll', handleScroll);
      }
  
      return () => {
        if (currentRef) {
          currentRef.removeEventListener('scroll', handleScroll);
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      };
    }, []);

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
