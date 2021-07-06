import React from 'react';
import * as Styled from './styles.js';


const Search = ({ children, onChange=null, value='' }) => {
  return (
      <Styled.Search 
          value={value}
          onChange={e => onChange(e.target.value)}
      >
          {children}
      </Styled.Search>
  );
}

export default Search;