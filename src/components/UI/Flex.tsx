import { FC } from "react";
import styled from "styled-components";

interface FlexProps {
  direction?: "column" | "row";
  items?: "center" | "start" | "end";
  justify?:
    | "center"
    | "space-between"
    | "space-around"
    | "flex-end"
    | "flex-start";
  margin?: string;
  padding?: string;
  gap?: string;
  children?: React.ReactNode;
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.items || "center"};
  justify-content: ${(props) => props.justify || "center"};
  gap: ${(props) => props.gap || "0px"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

export const Flex: FC<FlexProps> = (props) => {
  return <StyledFlex {...props} />;
};
