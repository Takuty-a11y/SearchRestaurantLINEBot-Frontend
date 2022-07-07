import { useContext } from "react";
import { SearchUserContext, SearchUserContextType } from "../providers/SearchTextProvider";

export const useSearchUser = (): SearchUserContextType => useContext(SearchUserContext);
