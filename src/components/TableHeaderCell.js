import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { setSortKey } from '../actions';

class TableHeaderCell extends React.Component {
  render() {
    const className = classnames({
      'table-info': this.props.sortKey === this.props.sortKeyInState,
      'text-right': this.props.isNumber
    }, this.props.sortOrders[this.props.sortKey] > 0 ? 'dropup' : 'dropdown');
    return (
      <th className={className}
        style={this.props.width ? {'width': this.props.width} : {}}
        onClick={() => this.props.setSortKey(this.props.sortKey)}
      >
        {this.props.label}
        {" "}
        <span className="dropdown-toggle"></span>
      </th>
    );
  }
}

const mapStateToProps = state => {
  return {
    sortKeyInState: state.sortKey,
    sortOrders: state.sortOrders
  };
};

export default connect(
  mapStateToProps,
  { setSortKey }
)(TableHeaderCell);
