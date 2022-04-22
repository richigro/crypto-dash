import React from "react";

const ModalContext = React.createContext<any | undefined>(undefined);

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const values = [isOpen, setIsOpen];
  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

const useModal = () => {
  const context = React.useContext(ModalContext);
  console.log("the context", context);
  if (!context) {
    throw new Error("useModal hook must be used within a ModalProvider");
  }

  return context;
};

export { ModalProvider, useModal };
