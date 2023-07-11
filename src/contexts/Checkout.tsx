import React, { createContext, useContext, useState } from 'react';

interface CheckoutContextValues {
  order: Order[];
  setOrder: React.Dispatch<React.SetStateAction<Order[]>>;
}

const CheckoutContext = createContext<CheckoutContextValues>(
  {} as CheckoutContextValues
);

interface CheckoutProviderProps {
  children: React.ReactNode;
}

export const CheckoutProvider: React.FC<CheckoutProviderProps> = ({
  children,
}) => {
  const [order, setOrder] = useState<Order[]>([]);

  return (
    <CheckoutContext.Provider
      value={{
        order,
        setOrder,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  return useContext(CheckoutContext);
};
