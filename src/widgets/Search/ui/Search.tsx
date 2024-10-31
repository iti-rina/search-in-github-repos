import { useState } from 'react';
import { Input } from 'antd';
import { observer } from 'mobx-react-lite';
import githubReposStore from '../../../app/model/githubReposStore';
import styles from './Search.module.css'

const { Search } = Input;

const SearchComponent = observer(() => {
  const [value, setValue] = useState('');

  const handleSearch = () => {
    if (githubReposStore.searchQuery !== value) {
      githubReposStore.searchRepositories(value);
      setValue('');
    }
  };

  return (
    <Search 
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onSearch={handleSearch}
      placeholder='Enter a search string' 
      enterButton='Search' 
      size='large'
      loading={githubReposStore.isLoading}
      className={styles.search}
    />
  );
})

export default SearchComponent;