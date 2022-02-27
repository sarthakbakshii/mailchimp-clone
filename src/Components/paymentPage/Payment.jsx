import { useContext, useState } from "react";
import "../../payment.css";
import { Crcard } from "./Crcard";

import { Paypal } from "./Paypal";

import { PriceContext } from "../../context/PriceContext";
import { NavbarPlan } from "../Navbars/NavbarPlan";

import { SubNavbarPay } from "../Navbars/SubNavbarPay";
export const Payment = () => {
  const [payment, setPayment] = useState("crcard");
  const { planPrice, planContacts, planEmails } = useContext(PriceContext);

  return (
    <div className="main-container">
      <NavbarPlan />

      <SubNavbarPay />

      <div>
        <div className="container">
          <div className="main-div">
            <div className="four-divs">
              <div className="div1">
                <div className="header-div">
                  <h3>payment method</h3>
                </div>
                <div className="card-details-div">
                  <nav className="payment-btns">
                    <button
                      className="payment-btns-btn"
                      onClick={() => {
                        setPayment("crcard");
                      }}
                    >
                      <p>Credit card</p>
                    </button>
                    <button
                      className="payment-btns-btn"
                      onClick={() => {
                        setPayment("paypal");
                      }}
                    >
                      <p>Paypal</p>
                    </button>
                    <hr />
                  </nav>
                  {payment === "crcard" ? <Crcard /> : <Paypal />}
                </div>
              </div>
              <hr />

              {/*<div id="div2" className="div2">
                <div className=" header-div contact-div">
                  <div className="contact-div-header">
                    <h3>Conteact address</h3>
                  </div>
                </div>
                <div>
                  <h3>Chidananda Sahu</h3>
                  <h3>New Delhi</h3>
                  <h3>New Delhi, India</h3>
                  <h3>111111</h3>
                </div>
                    </div> */}
              <hr />
              <div id="div3" className="div3">
                <div className="tax-setting-div">
                  <div className=" header-div tax-setting-header">
                    <h3>Tax setting</h3>
                  </div>
                </div>
                <div className="tax-right-div">
                  <span>Registered VAT/GST/Tax ID</span>
                  <span className="optional">(optional)</span>
                  <div className="tax-setting-input">
                    <input type="text" />
                  </div>
                  <div className="tax-setting-btns">
                    <button className="tax-save-btn">Save</button>
                    <button className="tax-cancel-btn">Cancel</button>
                  </div>
                </div>
              </div>
              <hr />
              <div className="div4">
                <div className="billing-header">
                  <h3>Billing adress</h3>
                </div>
                <div className="billing-address">
                  <input type="checkbox" />
                  <span>Same as contact address</span>
                </div>
              </div>
            </div>
          </div>
          <div className="purchase-total-div">
            <div className="purchase-header">
              <h3>Purchase Summery</h3>
              <span>
                Build in <span className="indian-rupees">Indian rupees</span>
              </span>
            </div>
            <div className="total-payment-list">
              <div className="payment-list heading-list">
                <span>Essential Plan</span>
                <span>₹{planPrice}.00</span>
              </div>
              <div className="payment-list">
                <span>{planContacts} Contacts*</span>
              </div>
              <div className="payment-list">
                <span>{planEmails} Emails*</span>
              </div>
              <div className="payment-list heading-list another-list">
                <span>Tax</span>
                <span>₹0.00</span>
              </div>
              <hr />
              <div className="payment-list heading-list another-list total-payment">
                <span>Total</span>
                <span>₹{planPrice}.00</span>
              </div>
              <hr />
              <button className="paynow-btn">Pay now</button>
              <p className="payment-paragraph">
                *When you exceed your limit, you incur additional charges of ₹
                {Math.floor(planPrice / 12)}/mo per additional {planContacts}{" "}
                contacts (comes with additional {planEmails} email sends).
              </p>
              <p className="payment-link">Learn more</p>
            </div>
            <div className="email-edit">
              <p>Your receipt will be sent to</p>
             
           
            </div>
            <p className="last-paragraph">
              Actual price may vary. Prices displayed are estimates based on
              current exchange rates. Exact amount charged will vary and depends
              on the exchange rate at the time of payment processing. Prices
              displayed exclude any applicable taxes and fees, which will be
              added to the cost of all services purchased. For exact base
              pricing please refer to prices listed in USD.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
