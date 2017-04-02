import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { thunkRet_fetchVideos, resetAll } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onReset = this.onReset.bind(this);

  }

  onReset() {
    this.setState({ term: '' });
    this.props.resetAll();
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch data
    this.props.thunkRet_fetchVideos(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Youtube search for your fav videos"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
        <span className="input-group-btn">
          <button className="btn btn-secondary" onClick={this.onReset}>Reset</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ thunkRet_fetchVideos, resetAll }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
