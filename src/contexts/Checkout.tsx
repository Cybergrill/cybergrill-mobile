import React, { createContext, useContext, useState, useCallback } from 'react';

interface CheckoutContextValues {
  firstLaunch: boolean;
  setFirstLaunch: React.Dispatch<React.SetStateAction<boolean>>;
  firstLaunchCheck: () => Promise<void>;
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
  const [firstLaunch, setFirstLaunch] = useState(true);

  const firstLaunchCheck = useCallback(async () => {
    setFirstLaunch(true);
  }, []);

  return (
    <CheckoutContext.Provider
      value={{
        firstLaunchCheck,
        firstLaunch,
        setFirstLaunch,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  return useContext(CheckoutContext);
};
