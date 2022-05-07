import './SearchPanel.scss';
import { Component } from 'react';

export class SearchPanel extends Component {
  render () {
    return (
      <input
        className="form-control search-input"
        type="search"
        placeholder="Type here to search"
        onChange={(e) => this.props.onSearchChanged(e.target.value)}
      />
    );
  }
}
