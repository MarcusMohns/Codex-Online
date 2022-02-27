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
          Kill more bosses with less effort! The Raid Assembler helps you
          optimize your raids performance, manage the players in your raid,
          monitor the raids buffs, utilities and roles, all at a glance.
          <div className="step-container">
            <span className="step-number">1</span>
            Add players to your raid
            <span className="step-number">2</span>
            Review composition, buffs, utilities and roles
            <span className="step-number">3</span>
            Save your raid in the browser or locally to share with others
          </div>
          <a href="/raidassembler" className="link-button">
            Get Started!
          </a>
        </PagePreviewText>
        {raidAssemblerImage}
      </PagePreviewContainer>
      <PagePreviewContainer id="gem-finder-container">
        <PagePreviewText>
          <PagePreviewHeader>Gem Finder</PagePreviewHeader>
          Gem Finder consists of every non-meta gem in 3.3.5. Find a gem with
          the stats, quality or color that suit your needs!
        </PagePreviewText>
        {gemFinderImage}
      </PagePreviewContainer>
      <PagePreviewContainer>
        <PagePreviewText>
          <PagePreviewHeader>Arena Point Calculator</PagePreviewHeader>
          Updated for 3.3.5. Calculate how many points you will receive at the
          end of the reset or check how much rating you need for that upgrade
          you're looking at.
        </PagePreviewText>
        {arenaPointCalcImage}
      </PagePreviewContainer>
    </Main>
  );
};

export default Home;
