import { Link } from 'react-router-dom';
import './Button.css'; // Import the Button styles

const Button = ({ to, className, children }) => {
  // Determine if the button should render a Link or a button element based on the 'to' prop
  const ButtonElement = to ? Link : 'button';

  return (
    <ButtonElement to={to} className={`button ${className}`}>
      {children}
    </ButtonElement>
  );
};

export default Button;
