import React from "react";

const ModalContext = React.createContext();

export function ModalProvider(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const values = [isOpen, setIsOpen];
  return <ModalContext.Provider values={values} {...props} />;
}

export const useModal = () => {
  const context = React.useContext(ModalContext);
  console.log("the context", context);
  if (!context) {
    throw new Error("useModal hook must be used within a ModalProvider");
  }
  // this part is a little redundant but it is more explicit and maybe more readable in the future.
  return context;
};
