function Header({ className, handleClick }) {
  return (
    <div className={className}>
      <h1>Header</h1>
      <button type="button" onClick={handleClick}>
        Open sidebar
      </button>
    </div>
  );
}

export default Header;
