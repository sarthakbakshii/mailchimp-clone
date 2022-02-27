import "../../payment.css";
import { Link } from "react-router-dom";
export const NavbarPlan = () => {
  return (
    <div className="main-header">
      <div className="Sub-main-header">
        <h1>Select A Plan</h1>
        <div className="plan-image-div">
          <Link to={"/"}>
            <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/35/000000/external-cross-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png" />
          </Link>
        </div>
      </div>
    </div>
  );
};
