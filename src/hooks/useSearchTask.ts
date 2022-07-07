import { useContext } from "react";
import {
  SearchTaskContext,
  SearchTaskContextType,
} from "../providers/SearchTextProvider";

export const useSearchTask = (): SearchTaskContextType =>
  useContext(SearchTaskContext);
