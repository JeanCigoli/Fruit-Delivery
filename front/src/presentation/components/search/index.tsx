import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { SearchDTO } from '../../../domain/components/search-dto';
import { Container, Input } from './styled';

const Search: React.FC<SearchDTO> = ({ onClick, placeholder }) => {
  const [value, setValue] = useState('');

  const handleClick = () => {
    onClick(value);
  };
  return (
    <Container>
      <Input
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
      />

      <FaSearch onClick={handleClick} />
    </Container>
  );
};

export default Search;
