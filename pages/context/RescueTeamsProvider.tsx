import React, { ReactNode, createContext, useContext, useState } from "react";
import { RescueTeamType } from "../types/rescueTeams.type";
type RescueTeamsPageContext = {
  rescueTeams: RescueTeamType | undefined;
  setRescueTeams: React.Dispatch<
    React.SetStateAction<RescueTeamType | undefined>
  >;
  onClose: () => void;
};

export const RescueTeamsPageContext =
  createContext<RescueTeamsPageContext>(
    {} as RescueTeamsPageContext
  );
type RescueTeamsPageProviderProps = {
  children: ReactNode;
};
const RescueTeamPageProvider = (
  props: RescueTeamsPageProviderProps
) => {
  const { children } = props;
  const [rescueTeams, setRescueTeams] =
    useState<RescueTeamType | undefined>();

  const onClose = () => {};

  return (
    <RescueTeamsPageContext.Provider
      value={{
        rescueTeams,
        setRescueTeams,
        onClose
      }}
    >
      {children}
    </RescueTeamsPageContext.Provider>
  );
};

export default RescueTeamPageProvider;

export const useRescueTeamsContext = () =>
  useContext(RescueTeamsPageContext);