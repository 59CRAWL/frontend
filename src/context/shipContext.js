import { createContext, useState } from "react";

export const Message_data = createContext();

function ShipContext({ children }) {
    const [message, setMessage] = useState();
  
    return (
      <Message_data.Provider value={{ message, setMessage }}>
        {children}
      </Message_data.Provider>
    );
  }

export default ShipContext