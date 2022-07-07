import logo from "../images/logo-mesto.svg";

function Header() {
  return (
  <>
    <header className="header">
    <img
      src={logo}
      alt="Лого Место Россия"
      className="header__logo"
    />
    </header>
  </>
  );
}

export default Header;