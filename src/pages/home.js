import {
  Main,
  HomeSection,
  PagePreviewText,
  PagePreviewContainer,
  PagePreviewHeader,
} from "../components/styles/HomeStyled";

const raidAssemblerImage = (
  <img
    src="/images/raid_assembler.png"
    className="content-preview-image"
    alt="plus sign"
  />
);
const arenaPointCalcImage = (
  <img
    src="/images/arena_point_calc.png"
    alt="shield"
    className="content-preview-image"
  />
);
const gemFinderImage = (
  <img
    src="/images/gemfinder.png"
    alt="sword"
    className="content-preview-image"
  />
);

const Home = () => {
  return (
    <Main>
      <HomeSection />
      <PagePreviewContainer>
        <PagePreviewText>
          <PagePreviewHeader>Raid Assembler</PagePreviewHeader>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </PagePreviewText>
        {raidAssemblerImage}
      </PagePreviewContainer>
      <PagePreviewContainer id="gem-finder-container">
        <PagePreviewText>
          <PagePreviewHeader>Gem Finder</PagePreviewHeader>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </PagePreviewText>
        {gemFinderImage}
      </PagePreviewContainer>
      <PagePreviewContainer>
        <PagePreviewText>
          <PagePreviewHeader>Arena Point Calculator</PagePreviewHeader>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </PagePreviewText>
        {arenaPointCalcImage}
      </PagePreviewContainer>
    </Main>
  );
};

export default Home;
