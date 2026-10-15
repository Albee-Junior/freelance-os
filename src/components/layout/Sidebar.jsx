function Sidebar({ className }) {
  return (
    <div className={className}>
      <a href="#">Dashboard</a>
      <a href="#">Clients</a>
      <a href="#">Projects</a>
      <a href="#">Invoices</a>
      <a href="#">Settings</a>
    </div>
  );
}

export default Sidebar;
