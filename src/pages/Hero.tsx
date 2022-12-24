import { MovieRow } from "components/MovieRow";
import { FC } from "react";
import styled from "styled-components";
import { sections } from "utils/constants";

const HeroWrapper = styled.div`
  padding: 0 15px;
`;
export const Hero: FC = () => {
  return (
    <HeroWrapper>
      {sections.map(({ title, section }) => (
        <MovieRow title={title} section={section} key={section} />
      ))}
    </HeroWrapper>
  );
};
