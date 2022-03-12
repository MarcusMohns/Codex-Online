import {
  Main,
  HomeSection,
  PagePreviewText,
  PagePreviewContainer,
  PagePreviewHeader,
} from "../components/styles/HomeStyled";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Main>
      <HomeSection />
      <PagePreviewContainer>
        <PagePreviewText>
          <PagePreviewHeader>Raid Assembler</PagePreviewHeader>
          Organize 3.3.5 WOTLK Buffs, Debuffs and Utilities. The Raid Assembler
          helps you optimize your raids performance, manage the players in your
          raid, monitor the raids buffs, utilities and roles.
          <div className="step-container">
            <span className="step-number">1</span>
            Add players to your raid
            <span className="step-number">2</span>
            Review composition, buffs, utilities and roles
            <span className="step-number">3</span>
            Save your raid in the browser or locally to share with others
          </div>
          <Link to="/raidassembler" className="link-button">
            Get started!
          </Link>
        </PagePreviewText>
        <img
          src="images/raid_assembler.png"
          className="content-preview-image"
          alt="raid-assembler-preview"
        />
      </PagePreviewContainer>
      <PagePreviewContainer id="gem-finder-container">
        <PagePreviewText>
          <PagePreviewHeader>Gem Finder</PagePreviewHeader>
          Gem Finder consists of every non-meta gem in 3.3.5. Find a gem with
          the stats, quality or color that suit your needs
          <Link to="/gemfinder" className="link-button">
            Find gems
          </Link>
        </PagePreviewText>
        <img
          src="images/gemfinder.png"
          className="content-preview-image"
          alt="raid-assembler-preview"
        />
      </PagePreviewContainer>
      <PagePreviewContainer>
        <PagePreviewText>
          <PagePreviewHeader>Arena Point Calculator</PagePreviewHeader>
          Updated for 3.3.5. Calculate how many points you will receive at the
          end of the reset or check how much rating you need for that upgrade
          you're looking at
          <Link to="/arenapointcalculator" className="link-button">
            Let's go
          </Link>
        </PagePreviewText>
        <img
          src="images/arena_point_calc.png"
          className="content-preview-image"
          alt="arena-point-calc-preview"
        />
      </PagePreviewContainer>
    </Main>
  );
};

export default Home;
