export const SearchPanel = () => {
  const searchPlaceholder = 'Type here to search';
  const searchStyle = {
    fontSize: '20px',
  };

  return <input type="search" placeholder={searchPlaceholder} style={searchStyle}/>;
};
