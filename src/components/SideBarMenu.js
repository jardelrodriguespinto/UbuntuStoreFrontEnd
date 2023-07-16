import '../assets/style/sidebar-menu.css';

function SideBarMenu() {

  return (
    <div className="sidebar">
      <button className="fechar-btn">X</button>
      <ul className="sidebar-menu">
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
      </ul>
    </div>
  );
}
export default SideBarMenu;
