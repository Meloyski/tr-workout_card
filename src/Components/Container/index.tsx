import * as React from "react";
import "./Container.scss";

interface ContainerProps {
  children: React.ReactNode;
}

const Grid = (props: ContainerProps) => {
  return <div className="container">{props.children}</div>;
};

export default Grid;
