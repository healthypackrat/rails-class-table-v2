import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setFilterKey } from '../actions';
const _ = require('lodash');
const qs = require('query-string');

class SearchField extends React.Component {
  constructor(props) {
    super(props);

    const params = qs.parse(props.location.search);

    this.state = { input: params.q || '' };

    this.setFilterKey = _.debounce(() => {
      this.props.setFilterKey(this.state.input);
      this.pushHistory();
      this.updateTitle();
    }, 500);
  }

  updateInput = event => {
    this.setState({ input: event.target.value });
    this.setFilterKey();
  };

  pushHistory = () => {
    const location = this.state.input ? `/search?${qs.stringify({ q: this.state.input })}` : '/';
    this.props.history.push(location);
  };

  updateTitle = () => {
    document.title = this.state.input || 'rails-class-table-v2';
  };

  componentDidMount() {
    this.props.setFilterKey(this.state.input);
    this.updateTitle();
  }

  render() {
    return (
      <div className="form-group">
        <input type="search" className="form-control" placeholder="クラス名で検索..." value={this.state.input} onChange={this.updateInput} />
      </div>
    );
  }
}

export default withRouter(connect(
  null,
  { setFilterKey }
)(SearchField));
