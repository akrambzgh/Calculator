/* eslint-disable react/prop-types */

function ThemeSwitcher({ switcherRef, switchTheme }) {
  return (
    <div className="header">
      <div className="logo">
        <h2>calc</h2>
      </div>
      <div className="themes">
        <span>1 2 3</span>
        <div
          className="switcher theme-1"
          ref={switcherRef}
          onClick={switchTheme}
        ></div>
      </div>
    </div>
  );
}
export default ThemeSwitcher;
