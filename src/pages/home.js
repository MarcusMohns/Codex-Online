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
      <PagePreviewContainer id="raid-assembler-container">
        <PagePreviewText>
          <PagePreviewHeader>Raid Helper</PagePreviewHeader>
          Organize 3.3.5 WOTLK Buffs, Debuffs and Utilities. The Raid Helper
          helps you optimize your raids performance, manage the players in your
          raid, monitor the raids buffs, utilities and roles and save your work
          in the browser or locally in order to share with others!
          <div className="step-container">
            <div className="a-step">
              <span className="step-number">1</span>
              Add players
            </div>

            <div className="a-step">
              <span className="step-number">2</span>
              Review composition
            </div>

            <div className="a-step">
              <span className="step-number">3</span>
              Save your raid
            </div>
          </div>
          <Link to="/raidhelper" className="link-button">
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
          Gem Finder consists of every WOTLK gem in 3.3.5. Find a gem with the
          stats, quality or color that suit your needs
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
            Calculate points
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
