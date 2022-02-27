import "../../payment.css";
import { Link } from "react-router-dom";
export const PayBtnPrice = () => {
  return (
    <div>
      <Link to={"/payment"}>
        <button className="paynow-btn">Upgrade</button>
      </Link>
    </div>
  );
};
