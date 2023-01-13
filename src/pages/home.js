import {
  Main,
  PagePreviewText,
  PagePreviewContainer,
  PagePreviewHeader,
} from "../components/styles/Home.styled";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Main>
      <PagePreviewContainer id="raid-assembler-container">
        <PagePreviewText>
          <PagePreviewHeader>Raid Helper</PagePreviewHeader>
          <div>
            Organize WotLK{" "}
            <span className="highlight">Buffs, Debuffs and Utilities</span>. The
            Raid Helper helps you optimize your raids performance by giving you
            a full <span className="highlight">overview</span> of the{" "}
            <span className="highlight">raid buffs</span>, the{" "}
            <span className="highlight">players</span> in your raid and their
            different{" "}
            <span className="highlight">utilities, cooldowns and roles</span>.
            Additionally, feel free save your raid composition in the browser or
            locally in order to share with others!
          </div>
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
          <div>
            Find<span className="highlight"> any gem </span>in 3.3.5 WotLK with
            the <span className="highlight">stats, quality or color </span> that
            suit your needs
          </div>
          <Link to="/gemfinder" className="link-button">
            Find gems
          </Link>
        </PagePreviewText>
        <img
          src="images/gem_finder.png"
          className="content-preview-image"
          alt="raid-assembler-preview"
        />
      </PagePreviewContainer>
      <PagePreviewContainer>
        <PagePreviewText>
          <PagePreviewHeader>Arena Point Calculator</PagePreviewHeader>
          <div>
            Calculate how many <span className="highlight">points </span>
            you will <span className="highlight">recieve </span> at the end of
            the reset or check how much rating you need for that upgrade you're
            looking at
          </div>
          <Link to="/arenapointcalculator" className="link-button">
            Calculate points
          </Link>
        </PagePreviewText>
        <img
          src="images/arena_point_calculator.png"
          className="content-preview-image"
          alt="arena-point-calc-preview"
        />
      </PagePreviewContainer>
      <PagePreviewContainer id="hit-cap-container">
        <PagePreviewText>
          <PagePreviewHeader>Hit Cap Helper</PagePreviewHeader>
          <div>
            Smoothly <span className="highlight">find out</span> exactly how
            much <span className="highlight">hit</span> you need on your{" "}
            <span className="highlight">character sheet</span> by inputting your
            hit talents and access to raid and draenei buffs
          </div>
          <Link to="/hitcaphelper" className="link-button">
            Find your hit
          </Link>
        </PagePreviewText>
        <img
          src="images/hit_cap_helper.png"
          className="content-preview-image"
          alt="arena-point-calc-preview"
        />
      </PagePreviewContainer>
    </Main>
  );
};

export default Home;
