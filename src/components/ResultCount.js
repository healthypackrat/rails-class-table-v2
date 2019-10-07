import React from 'react';
import { connect } from 'react-redux';

const ResultCount = ({ filteredEntries }) => {
  return (
    <p>{filteredEntries.length}件の結果</p>
  );
};

const mapStateToProps = state => {
  return { filteredEntries: state.filteredEntries };
};

export default connect(mapStateToProps)(ResultCount);
