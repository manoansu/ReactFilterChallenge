import { createContext } from "react";

export type ContextCartCountType = {
    contextCartCount: number;
    setContestCartCount: (contextCartCount: number) => void;
}

export const ContextCartCount = createContext<ContextCartCountType> ({
    contextCartCount: 0,
    setContestCartCount: () => {}
})