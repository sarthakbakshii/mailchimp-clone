import { createContext, useState } from "react";

export const PriceContext = createContext();
export const PriceContextProvider = ({ children }) => {
  const [planPrice, setPlanPrice] = useState();
  const [planContacts, setPlanContact] = useState();
  const [planEmails, setPlanEmails] = useState();
  const handlePrice = (p, c, e) => {
    setPlanPrice(p);
    setPlanContact(c);
    setPlanEmails(e);
  };
  return (
    <PriceContext.Provider
      value={{ planPrice, planContacts, planEmails, handlePrice }}
    >
      {children}
    </PriceContext.Provider>
  );
};
