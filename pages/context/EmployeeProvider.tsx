import React, { ReactNode, createContext, useContext, useState } from "react";
// import {  } from "../types/pagination.type";
import { EmployeeType} from "../types/employee.type";

type EmployeesPageContextValue = {
  employee: EmployeeType | undefined;
  setEmployee: React.Dispatch<
    React.SetStateAction<EmployeeType | undefined>
  >;
  onClose: () => void;
};

export const EmployeesPageContext =
  createContext<EmployeesPageContextValue>(
    {} as EmployeesPageContextValue
  );
type EmployeesPageProviderProps = {
  children: ReactNode;
};
const EmployeePageProvider = (
  props: EmployeesPageProviderProps
) => {
  const { children } = props;
  const [employee, setEmployee] =
    useState<EmployeeType | undefined>();

  const onClose = () => {};

  return (
    <EmployeesPageContext.Provider
      value={{
        employee,
        setEmployee,
        onClose
      }}
    >
      {children}
    </EmployeesPageContext.Provider>
  );
};

export default EmployeePageProvider;

export const useEmployeesContext = () =>
  useContext(EmployeesPageContext);