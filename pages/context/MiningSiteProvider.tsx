import React, { ReactNode, createContext, useContext, useState } from "react";
import { MiningSiteType } from "../types/miningSite.type";
// import {  } from "../types/pagination.type";

type MinigSitesPageContextValue = {
  miningSite: MiningSiteType | undefined;
  setMiningSite: React.Dispatch<
    React.SetStateAction<MiningSiteType | undefined>
  >;
  onClose: () => void;
};

export const MinigSitesPageContext =
  createContext<MinigSitesPageContextValue>(
    {} as MinigSitesPageContextValue
  );
type MiningSitesPageProviderProps = {
  children: ReactNode;
};
const MiningSitePageProvider = (
  props: MiningSitesPageProviderProps
) => {
  const { children } = props;
  const [miningSite, setMiningSite] =
    useState<MiningSiteType | undefined>();

  const onClose = () => {};

  return (
    <MinigSitesPageContext.Provider
      value={{
        miningSite,
        setMiningSite,
        onClose
      }}
    >
      {children}
    </MinigSitesPageContext.Provider>
  );
};

export default MiningSitePageProvider;

export const useMiningSiteContext = () =>
  useContext(MinigSitesPageContext);