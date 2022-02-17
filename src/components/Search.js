import React from 'react';
import { useSearchParams } from 'react-router-dom';

const displayQueryParam = {
  fontSize: 25,
  fontWeight: 'bold',
  color: 'indigo',
  marginLeft: 300,
  marginTop: 30,
};

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchKeyword = searchParams.get('s');
  return (
    <div style={displayQueryParam}>
      This is your url query parameter: {searchKeyword}
    </div>
  );
};

export default Search;
