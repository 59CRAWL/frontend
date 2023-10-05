import { createContext, useState } from "react";

export const ShipContext = createContext(null);

function ShipContextProvider({ children }) {
    const [ships, setShips] = useState();
  
    return (
      <ShipContext.Provider value={{ ships, setShips }}>
        {children}
      </ShipContext.Provider>
    );
  }

export default ShipContextProvider