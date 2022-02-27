import "../../payment.css";
import { Link } from "react-router-dom";
export const SubNavbar = () => {
  return (
    <div>
      <div className="page-link-div">
        <p>
          <Link to={"/plans"} className="prevLink">
            Selection
          </Link>
        </p>
      </div>
    </div>
  );
};
