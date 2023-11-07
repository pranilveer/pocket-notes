import { createContext, useState } from "react";

// Create a context with default values for notes and selected
const PocketContext = createContext({
  notes: [],
  setNotes: () => {},
  selected: "",
  setSelected: () => {},
});

// Provider component that provides the context values to its children
const Provider = ({ children }) => {
  // State for 'selected' and 'notes'
  const [selected, setSelected] = useState("");
  const [notes, setNotes] = useState([]);

  // Create an object containing the state and functions to share via context
  const valueToShare = {
    notes,
    setNotes,
    selected,
    setSelected,
  };

  return (
    // Provide the context values to the children
    <PocketContext.Provider value={valueToShare}>
      {children}
    </PocketContext.Provider>
  );
};

// Export the Provider component and the PocketContext itself
export { Provider };
export default PocketContext;
