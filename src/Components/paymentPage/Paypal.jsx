import { useContext } from "react";
import { PriceContext } from "../../context/PriceContext";
import "../../payment.css";
export const Paypal = () => {
  const { planPrice } = useContext(PriceContext);
  return (
    <div>
      <div className="paypal-div">
        <img
          className="paypal-image"
          src="https://us14.admin.mailchimp.com/images/third-party-logos/paypal.svg"
          alt=""
        />
        <span className="paypal-span">
          PayPal balance, eCheck, credit, and more
        </span>
      </div>
      <div>
        <button className="paypal-connect-btn">
          <a
            href={`https://www.paypal.com/cgi-bin/webscr?cmd=_cart&business=9S4HENHLPWYFC&lc=IN&item_name=mailchimp&amount=${planPrice}%2e00&currency_code=INR&button_subtype=products&no_note=0&cn=Add%20special%20instructions%20to%20the%20seller%3a&no_shipping=2&add=1&bn=PP%2dShopCartBF%3abtn_cart_LG%2egif%3aNonHosted`}
          >
            Connect to PayPal
          </a>
        </button>
      </div>
    </div>
  );
};
