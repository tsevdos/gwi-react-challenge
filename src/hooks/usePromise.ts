import { useState, useEffect } from "react";
import { Status } from "../types";

const usePromise = <T>(fn: (options?: any) => Promise<T>, options: any = null) => {
  const [state, setState] = useState<{
    status: Status;
    data: T | null;
  }>({ status: "loading", data: null });
  const { status, data } = state;

  useEffect(() => {
    const loadData = async () => {
      try {
        if (options) {
          const data = await fn(options);
          setState({ status: "success", data });
        } else {
          const data = await fn();
          setState({ status: "success", data });
        }
      } catch (error) {
        setState({ status: "error", data: null });
      }
    };

    loadData();
  }, [fn, options]);

  return { data, status };
};

export default usePromise;
