import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Movie } from "types";

const StyledImage = styled.img`
  width: 200px;
  height: 100%;
  object-fit: contain;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.05);
  }
`;

export const MovieCard: FC<Movie> = (props) => {
  const baseImgURL = "https://image.tmdb.org/t/p/original/";
  return (
    <Link to={`/watch/${props.id}`}>
      <StyledImage src={baseImgURL + props.poster_path} alt="movie poster" />
    </Link>
  );
};
