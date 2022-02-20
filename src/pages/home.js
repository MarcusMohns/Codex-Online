import { Main, BackGround, HomeSection } from "../components/styles/HomeStyled";
const Home = () => {
  return (
    <BackGround>
      <Main>
        <HomeSection />
        <HomeSection />
      </Main>
    </BackGround>
  );
};

export default Home;
