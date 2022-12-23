import { FC } from "react";
import styled from "styled-components";

interface FlexProps {
  direction?: "column" | "row";
  items?: "center" | "start" | "end";
  justify?: "center" | "start" | "end";
  margin?: string;
  children?: React.ReactNode;
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.items || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  margin: ${(props) => props.margin || "0"};
`;

export const Flex: FC<FlexProps> = (props) => {
  return <StyledFlex {...props} />;
};
