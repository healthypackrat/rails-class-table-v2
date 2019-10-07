import React from 'react';
import SearchField from './SearchField';
import HideNoDoc from './HideNoDoc';
import ResultCount from './ResultCount';
import Table from './Table';

export default function Main() {
  return (
    <div className="main container-fluid my-3">
      <SearchField />
      <HideNoDoc />
      <ResultCount />
      <Table />
    </div>
  );
};
