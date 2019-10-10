import React from 'react';
import SearchField from './SearchField';
import UseRegExp from './UseRegExp';
import HideNoDoc from './HideNoDoc';
import ResultCount from './ResultCount';
import Table from './Table';

export default function Main() {
  return (
    <div className="main container-fluid my-3">
      <p>
        <a href="https://github.com/healthypackrat/rails-class-table-v2">リポジトリに戻る</a>
      </p>
      <SearchField />
      <UseRegExp />
      <HideNoDoc />
      <ResultCount />
      <Table />
    </div>
  );
};
