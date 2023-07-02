import '../index.css';
import NavBarComScroll from './NavBarComScroll';
import NavBarPaginaHomeSemScroll from './SegundoHeaderHome';

function Header({isHomePage}) {

  return (
    <div>
      <header>
        <NavBarComScroll/>
        {isHomePage ? <NavBarPaginaHomeSemScroll/> : null};
      </header>
    </div>
  );
}
export default Header;
