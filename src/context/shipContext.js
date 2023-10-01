import { createContext, useState } from "react";

export const ShipContext = createContext(null);

function ShipContextProvider({ children }) {
    const [message, setMessage] = useState();
  
    return (
      <ShipContext.Provider value={{ message, setMessage }}>
        {children}
      </ShipContext.Provider>
    );
  }

export default ShipContextProvider