/* eslint-disable react-refresh/only-export-components */
import React, { ReactNode, createContext, useContext, useState } from "react";
import { PaginationType } from "../types/pagination.type";
import { EmployeeType} from "../types/employee.type";

type EmployeesPageContextValue = {
  Employee: PaginationType<EmployeeType> | undefined;
  setEmployee: React.Dispatch<
    React.SetStateAction<PaginationType<EmployeeType> | undefined>
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
  const [Employee, setEmployee] =
    useState<PaginationType<EmployeeType>>();

  const onClose = () => {};

  return (
    <EmployeesPageContext.Provider
      value={{
        Employee,
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
