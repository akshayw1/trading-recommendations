"use client";
import { useSession } from "next-auth/react";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import pagesWithTable from "@/components/header/pagesWithTable";

const OnboardingContext = React.createContext<any>(undefined);

export const OnboardingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideAside, setHideAside] = useState(false);
  const [onTable, setOnTable] = useState(false);

  const calculateHideAside = () => {
    return pagesWithTable.includes(pathname) && !menuOpen;
  };

  useEffect(() => {
    const newHideAside = calculateHideAside();
    setOnTable(pagesWithTable.includes(pathname));
    if (hideAside !== newHideAside) {
      setHideAside(newHideAside);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuOpen, pathname]);

  return (
    <OnboardingContext.Provider
      value={{ status, session, hideAside, menuOpen, setMenuOpen, onTable }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};
export const useOnboardingContext = () => {
  const onboardingContext = React.useContext(OnboardingContext);
  if (onboardingContext === undefined) {
    throw new Error("useOnboardingContext must be inside a OnboardingProvider");
  }
  return onboardingContext;
};
