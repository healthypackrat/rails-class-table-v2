import React from 'react';
import { connect } from 'react-redux';

const ResultCount = ({ count }) => {
  return (
    <p>{count}件の結果</p>
  );
};

const mapStateToProps = state => {
  return { count: state.filteredEntries.length };
};

export default connect(mapStateToProps)(ResultCount);
