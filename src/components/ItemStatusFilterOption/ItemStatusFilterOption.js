export const ItemStatusFilterOption = ({ statusToToggle, currentStatusFilter, onFilterUpdated, children }) => {
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
  );
};
