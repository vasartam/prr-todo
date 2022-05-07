import { Component } from 'react';
import './ItemAddForm.scss';

export class ItemAddForm extends Component {
  onLabelChange = (e) => {
    console.log(e.target.value);
  }

  render () {
    return (
      <form className="item-add-form">
        <input
          className="item-add-form__input form-control"
          type="text"
          placeholder="What needs to be done"
          onChange={this.onLabelChange}
        />
        <button
          className="item-add-form__button btn btn-outline-secondary"
          onClick={() => this.props.onItemAdded('Hello world!')}
        >
          Add Item
        </button>
      </form>
    );
  }
}
