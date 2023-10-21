import "./Button.css";

const Button = ({ children, version, type, disabled }) => {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
