import { Component } from 'react';
import './ItemAddForm.scss';

export class ItemAddForm extends Component {
  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.label === '') {
      return;
    }

    this.props.onItemAdded(this.state.label);

    this.setState({
      label: '',
    });
  };

  render () {
    return (
      <form className="item-add-form" onSubmit={this.onSubmit}>
        <input
          className="item-add-form__input form-control"
          type="text"
          placeholder="What needs to be done"
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button className="item-add-form__button btn btn-outline-secondary" type="submit">
          Add Item
        </button>
      </form>
    );
  }
}
