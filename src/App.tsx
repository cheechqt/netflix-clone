import { useEffect } from "react";
import { useAppDispatch } from "store/hooks";
import styled from "styled-components";
import { getMovies } from "store/reducers/getMovies";
import { Hero } from "pages/Hero";
import { Route, Routes } from "react-router-dom";
import { Nav } from "components/Nav";
import { Banner } from "components/Banner";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #0f0f0f;
  color: #e6e6e6;
`;

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <AppWrapper>
      <Nav />
      <Banner />
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/watch/:id" element={<Watch />} /> */}
      </Routes>
    </AppWrapper>
  );
}

export default App;
