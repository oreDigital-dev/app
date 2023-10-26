import React, { ReactNode, createContext, useContext, useState } from "react";
// import {  } from "../types/pagination.type";
import { CompanyType } from "../types/company.type";

type CompaniesPageContextValue = {
  company: CompanyType | undefined;
  setCompany: React.Dispatch<
    React.SetStateAction<CompanyType | undefined>
  >;
  onClose: () => void;
};

export const CompaniesPageContext =
  createContext<CompaniesPageContextValue>(
    {} as CompaniesPageContextValue
  );
type CompaniesPageProviderProps = {
  children: ReactNode;
};
const CompanyPageProvider = (
  props: CompaniesPageProviderProps
) => {
  const { children } = props;
  const [company, setCompany] =
    useState<CompanyType | undefined>();

  const onClose = () => {};

  return (
    <CompaniesPageContext.Provider
      value={{
        company,
        setCompany,
        onClose
      }}
    >
      {children}
    </CompaniesPageContext.Provider>
  );
};

export default CompanyPageProvider;

export const useCompaniesContext = () =>
  useContext(CompaniesPageContext);