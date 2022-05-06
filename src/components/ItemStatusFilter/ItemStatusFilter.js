import { Component } from 'react';
import './ItemStatusFilter.scss';

export class ItemStatusFilter extends Component {
  render () {
    return (
      <div className="item-status-filter btn-group">
        <button className="btn btn-info"
                type="button">
          All
        </button>
        <button className="btn btn-outline-secondary"
                type="button">
          Active
        </button>
        <button className="btn btn-outline-secondary"
                type="button">
          Done
        </button>
      </div>
    );
  }
}
