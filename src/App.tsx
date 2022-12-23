import { Flex } from "components/UI/Flex";
import { useEffect } from "react";
import { useAppDispatch } from "store/hooks";
import styled from "styled-components";
import { getMovies } from "store/reducers/getMovies";

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: darkcyan;
`;

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <AppWrapper>
      <Flex justify="center">Hello React</Flex>
    </AppWrapper>
  );
}

export default App;
