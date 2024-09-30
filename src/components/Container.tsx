import React from "react";
type ContainerProps = {
  styles: React.CSSProperties;
};
function Container({ styles }: ContainerProps) {
  return <div style={styles}>Text goes here</div>;
}

export default Container;
