import * as React from "react";

interface IconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

const Icon = (props: IconProps) => {
  return (
    <i className={`material-icons ${props.className}`} style={props.style}>
      {props.name}
    </i>
  );
};

export default Icon;
