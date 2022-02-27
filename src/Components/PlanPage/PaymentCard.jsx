import { useContext, useState } from "react";
import "../../payment.css";

import { PriceContext } from "../../context/PriceContext";
import { NavbarPlan } from "../Navbars/NavbarPlan";
import { SubNavbar } from "../Navbars/SubNavbar";
import { PayBtnFree } from "./PayBtnFree";
import { PayBtnPrice } from "./PayBtnPrice";

export const PaymentCard = () => {
  const [planText, setPlanText] = useState("Free");
  const [planAmount, setPlanAmount] = useState(0);
  const [contacts, setContacts] = useState(2000);
  const [emails, setEmails] = useState(10000);
  const [plans, setPlans] = useState("");

  const { handlePrice } = useContext(PriceContext);

  return (
    <>
    
    <div className="main-payment-plan-div">
      <NavbarPlan />
      <div style={{height : "50px"}}></div>
      <SubNavbar />
      <div className="inner-plans-div">
        <div className="inner-plan-left-div">
          <div className="payment-card-div">
            <div
              className="card1"
              onClick={() => {
                setPlanText("Premium");
                setPlanAmount(25000);
                setContacts(10000);
                setEmails(150000);
                handlePrice(25000, 10000, 150000);
              }}
              tabIndex={"0"}
            >
              <div className="card1-div">
                <h2>Premium</h2>
                {/* <input type="text" /> */}
              </div>
              <p className="paragraph">
                Advance features for pros who need more <br /> customization.
              </p>

              <p className="you-pay-paragraph">You pay</p>
              <div className="amount">
                <span className="rupee-symbol">₹</span>
                <span className="rupee">23000</span>
              </div>
              <p className="you-pay-paragraph">a month</p>
              <p className="contact-total">with 100,000 contacts</p>
            </div>
            {/* <div className="recommends">
              <p>Mailchimp Recommends</p>
            </div> */}
            <div
              className="card2"
              onClick={() => {
                setPlanText("Standard");
                setPlanAmount(7600);
                setContacts(10000);
                setEmails(6000);
                handlePrice(7600, 10000, 6000);
              }}
              tabIndex={"0"}
            >
              <div className="card1-div">
                <h2>Standard</h2>
                {/* <input type="text" /> */}
              </div>
              <p className="paragraph">
                Better insights for growing businesses that want more customers
              </p>

              <p className="you-pay-paragraph">You pay</p>
              <div className="amount">
                <span className="rupee-symbol">₹</span>
                <span className="rupee">7600</span>
              </div>
              <p className="you-pay-paragraph">a month</p>
              <p className="contact-total">with 100,000 contacts</p>
            </div>
            <div
              className="card3"
              onClick={() => {
                setPlanText("Essentials");
                setPlanAmount(5800);
                setContacts(10000);
                setEmails(5000);
                handlePrice(5800, 10000, 5000);
              }}
              tabIndex={"0"}
            >
              <div className="card1-div">
                <h2>Essentials</h2>
                {/* <input type="text" /> */}
              </div>
              <p className="paragraph">
                Must-have features for email senders who want <br /> added
                support
              </p>

              <p className="you-pay-paragraph">You pay</p>
              <div className="amount">
                <span className="rupee-symbol">₹</span>
                <span className="rupee">5800</span>
              </div>
              <p className="you-pay-paragraph">a month</p>
              <p className="contact-total">with 10,000 contacts</p>
            </div>
            <div
              className="card4"
              onClick={() => {
                setPlanText("Free");
                setPlanAmount(0);
                setContacts(2000);
                setEmails(10000);
                setPlans("free");
                handlePrice(planAmount, 2000, 10000);
              }}
              tabIndex={"0"}
            >
             

              <div className="card1-div card4-div">
                <h2>Free</h2>
                {/* <input type="text" /> */}
              </div>
              <p className="paragraph">
                All the basic for businesses that are just <br /> getting
                started
              </p>

              <p className="you-pay-paragraph">You pay</p>
              <div className="amount">
                <span className="rupee-symbol">₹</span>
                <span className="rupee">0</span>
              </div>
              <p className="you-pay-paragraph">a month</p>
              <p className="contact-total">2,000 contact maximum</p>
            </div>
          </div>
        </div>

        <div className="plans-upgrade-div">
          <div className="purchase-header">
            <h3>Purchase Summery</h3>
            <span>
              Build in <span className="indian-rupees">Indian rupees</span>
            </span>
          </div>
          <div className="total-payment-list">
            <div className="payment-list heading-list">
              <span>{planText} Plan</span>
              <span>₹{planAmount}</span>
            </div>
            <div className="payment-list">
              <span>{contacts} Contacts*</span>
            </div>
            <div className="payment-list">
              <span>{emails} Emails*</span>
            </div>
            <p className="payment-paragraph">
              *When you exceed your limit, you incur additional charges of ₹
              {Math.floor(planAmount / 12)}/mo per additional {contacts}{" "}
              contacts (comes with additional {emails} email sends).
            </p>
            <p className="payment-link">Learn more</p>
            {planAmount === 0 ? <PayBtnFree /> : <PayBtnPrice />}
          </div>

          <p className="last-paragraph">
            Actual price may vary. Prices displayed are estimates based on
            current exchange rates. Exact amount charged will vary and depends
            on the exchange rate at the time of payment processing. Prices
            displayed exclude any applicable taxes and fees, which will be added
            to the cost of all services purchased. For exact base pricing please
            refer to prices listed in USD.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};
