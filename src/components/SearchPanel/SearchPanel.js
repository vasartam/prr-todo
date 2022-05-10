import './SearchPanel.scss';
import { Component } from 'react';

export class SearchPanel extends Component {
  state = {
    search: '',
  };

  onSearchChange = (e) => {
    const value = e.target.value;

    this.setState({ search: value });

    this.props.onSearchChanged(value);
  };

  render () {
    return (
      <input
        className="form-control search-input"
        type="search"
        placeholder="Type here to search"
        value={this.state.search}
        onChange={this.onSearchChange}
      />
    );
  }
}
