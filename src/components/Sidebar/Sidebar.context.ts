import { createContext, useContext } from "react";

type SidebarContextType = undefined;

export const SidebarContext = createContext<SidebarContextType>(undefined);
export const useSidebar = () => useContext(SidebarContext);
