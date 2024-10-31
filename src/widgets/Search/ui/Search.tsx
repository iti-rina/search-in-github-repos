import { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchComponent = () => {
  const [value, setValue] = useState('');
  let isLoading = false;
  const handleSearch = () => {
    isLoading = true;
    isLoading = false;
  };

  return (
    <Search 
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onSearch={handleSearch}
      placeholder='Enter a search string' 
      enterButton='Search' 
      size='large'
      loading={isLoading}
    />
  );
}

export default SearchComponent;