/* eslint-disable react/prop-types */

function Button({
  button,
  handleCalculate,
  handleClear,
  handleDel,
  handleInput,
}) {
  return (
    <div
      className={
        button.action
          ? button.action === "delete"
            ? "del"
            : button.action === "reset"
            ? "reset"
            : "equals"
          : "button"
      }
      onClick={() =>
        button.value === "="
          ? handleCalculate()
          : button.value === "reset"
          ? handleClear()
          : button.value === "del"
          ? handleDel()
          : handleInput(button.value)
      }
    >
      {button.value}
    </div>
  );
}
export default Button;
