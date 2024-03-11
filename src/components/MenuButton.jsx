/* eslint-disable react/prop-types */
function MenuButton({ isMenuOpen, onMenuOpen }) {
  return (
    <button
      className="absolute z-50 sm:hidden right-4"
      onClick={onMenuOpen}
      aria-expanded={isMenuOpen}
      aria-controls="navbar-menu"
    >
      {!isMenuOpen ? (
        <img src="/images/icon-menu.svg" alt="" />
      ) : (
        <img src="/images/icon-close-menu.svg" alt="" />
      )}
      <span className="sr-only">
        {!isMenuOpen ? "Open Menu" : "Close Menu"}
      </span>
    </button>
  );
}

export default MenuButton;
