import { Component } from 'react';
import './ItemAddForm.scss';

export class ItemAddForm extends Component {
  render () {
    return (
      <div className="item-add-form">
        <button className="btn btn-outline-secondary" onClick={() => this.props.onItemAdded('Hello world!')}>
          Add Item
        </button>
      </div>
    );
  }
}
