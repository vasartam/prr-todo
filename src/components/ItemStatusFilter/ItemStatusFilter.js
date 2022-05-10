import { Component } from 'react';
import './ItemStatusFilter.scss';
import { todoItemStatuses } from '../App/App';

export class ItemStatusFilter extends Component {
  options = [
    {
      label: <>All</>,
      statusToToggle: 'all',
    },
    {
      label: <>Active</>,
      statusToToggle: 'active',
    },
    {
      label: <>Done</>,
      statusToToggle: 'done',
    },
  ];

  render () {
    const { onFilterUpdated, currentStatusFilter } = this.props;

    return (
      <div className="item-status-filter btn-group">
        {
          this.options.map(({ label , statusToToggle}) => (
            <ItemStatusFilterOption
              key={statusToToggle}
              statusToToggle={todoItemStatuses[statusToToggle]}
              currentStatusFilter={currentStatusFilter}
              onFilterUpdated={onFilterUpdated}
            >
              {label}
            </ItemStatusFilterOption>
          ))
        }
      </div>
    );
  }
}

export const ItemStatusFilterOption = ({statusToToggle, currentStatusFilter, onFilterUpdated, children}) => {
  let className = 'btn';

  if (currentStatusFilter === statusToToggle) {
    className += ' btn-info';
  } else {
    className += ' btn-outline-secondary';
  }

  return (
    <button className={className}
            type="button"
            onClick={() => onFilterUpdated(statusToToggle)}
    >
      {children}
    </button>
  )
}
