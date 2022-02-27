import "../../payment.css";
import { Link } from "react-router-dom";
export const SubNavbarPay = () => {
  return (
    <div>
      <div className="page-link-div">
        <p>
          <Link to={"/plans"} className="prevLink ">
            Selection
          </Link>
        </p>

        <p className="Subnavbarpay">Payment</p>
      </div>
    </div>
  );
};
