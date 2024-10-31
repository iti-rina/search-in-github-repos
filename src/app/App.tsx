import { Typography } from 'antd';
import { RepositoriesList } from '../features/repositoriesList/ui';
import { Search } from '../widgets/Search/ui';

const App = () => {
  return (
    <>
      <Typography.Title level={1}>Search GitHub repositories</Typography.Title>
      <Search />
      <RepositoriesList />
    </>
  )
}

export default App





