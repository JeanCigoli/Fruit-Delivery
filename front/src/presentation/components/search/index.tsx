import React, { useState } from 'react';
import { Input, IconButton } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

import { SearchDTO } from '../../../domain/components/search-dto';
import { Container } from './styled';

const Search: React.FC<SearchDTO> = ({ onClick, placeholder }) => {
  const [value, setValue] = useState('');

  const handleClick = () => {
    onClick(value);
  };
  return (
    <Container>
      <Input
        type="text"
        size="lg"
        variant="filled"
        bgColor="white"
        focusBorderColor="pink.400"
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
      />

      <IconButton
        aria-label="Search"
        size="lg"
        colorScheme="pink"
        icon={<FaSearch />}
        onClick={handleClick}
      />
    </Container>
  );
};

export default Search;
