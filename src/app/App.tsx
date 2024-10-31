import { Typography } from 'antd';
import { RepositoriesList } from '../features/repositoriesList/ui';
import { Search } from '../widgets/Search/ui';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Typography.Title level={1} className={styles.title}>Search GitHub repositories</Typography.Title>
      <Search />
      <RepositoriesList />
    </div>
  )
}

export default App





