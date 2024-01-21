import "./Button.scss";

function Button(props) {
  const { btnText, onClick, className, type } = props;
  return (
    <button type={type || "button"} className={className} onClick={onClick}>
      {btnText}
    </button>
  );
}

export default Button;
