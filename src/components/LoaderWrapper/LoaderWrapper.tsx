import { FC, ReactNode } from "react";
import { Alert } from "antd";
import { Status } from "../../types";
import { Loader } from "../";

type LoaderWrapperProps = {
  status: Status;
  children: Exclude<null | undefined | any, ReactNode>;
};

const LoaderWrapper: FC<LoaderWrapperProps> = ({ status, children }) => {
  if (status === "loading") {
    return <Loader />;
  }

  if (status === "error") {
    return (
      <Alert type="error" showIcon message="Ooops something went wrong... " description="Please try again later." />
    );
  }

  return children;
};

export default LoaderWrapper;
