import './SearchPanel.scss';

export const SearchPanel = () => {
  const searchPlaceholder = 'Type here to search';

  return (
    <input className="form-control search-input" type="search" placeholder={searchPlaceholder}/>
  );
};
