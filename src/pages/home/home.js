import {
  Main,
  PagePreviewText,
  PagePreviewContainer,
  PagePreviewCard,
  CardHeader,
  CardText,
  CardImage,
  CardContainer,
  Divider,
  HeroContainer,
} from "./styles/Home.styled";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Main>
      <HeroContainer>
        <div className="hero-text">
          <h2 className="hero-overline">WOW TOOLS</h2>
          <h1 className="hero-header">Welcome to Codex</h1>
          <p className="hero-subtitle">
            Your companion for World of Warcraft: Wrath of the Lich King
          </p>
        </div>
      </HeroContainer>
      <CardContainer>
        <PagePreviewCard>
          <CardHeader>🖩 Arena Point Calculator</CardHeader>
          <CardImage src="images/page-preview/card_arena_point.svg" />
          <CardText>
            <span className="highlight">Calculate</span> how many{" "}
            <span className="highlight">points </span>
            you will <span className="highlight">receive </span> at the end of
            the reset or check how much rating you need for that upgrade you're
            looking at
          </CardText>
          <Link to="/gemfinder" className="link-button">
            Calculate Points
          </Link>
        </PagePreviewCard>
        <PagePreviewCard>
          <CardHeader> 🔸 Gem Finder</CardHeader>
          <CardImage src="images/page-preview/card_gem_finder.svg" />
          <CardText>
            Find<span className="highlight"> any gem </span>in WotLK with the{" "}
            <span className="highlight">stats, quality</span> or{" "}
            <span className="highlight">color</span> that suit your needs
          </CardText>
          <Link to="/gemfinder" className="link-button">
            Find Gems
          </Link>
        </PagePreviewCard>
        <PagePreviewCard>
          <CardHeader> 🎯 Hit Cap Helper</CardHeader>
          <CardImage src="images/page-preview/card_hit_calculator.svg" />
          <CardText>
            Smoothly <span className="highlight">find out</span> exactly how
            much <span className="highlight">hit</span> you need on your{" "}
            <span className="highlight">character sheet</span>
          </CardText>
          <Link to="/gemfinder" className="link-button">
            Find Your Hit
          </Link>
        </PagePreviewCard>
      </CardContainer>
      <Divider>
        <h3>Raid Helper</h3>
      </Divider>
      <PagePreviewContainer>
        <PagePreviewText>
          <div className="page-preview-text">
            {/* <p>
              Organize WotLK{" "}
              <span className="highlight">Buffs, Debuffs and Utilities</span>.
              The Raid Helper helps you optimize your raids performance by
              giving you a full <span className="highlight">overview</span> of
              the <span className="highlight">raid buffs</span>, the{" "}
              <span className="highlight">players</span> in your raid and their
              different{" "}
              <span className="highlight">utilities, cooldowns and roles</span>.
              Additionally, feel free to <span className="highlight">save</span>{" "}
              your raid composition in the browser or locally and share it with
              others!
            </p> */}
            <Link to="/raidhelper" className="link-button">
              Get started!
            </Link>
          </div>
          <div className="step-container">
            <div className="a-step">
              <span className="step-number">1</span>
              <p className="step-text">
                <span>Add players</span>
                <span className="step-description">
                  {" "}
                  Adding a player will add all the buffs, debuffs and utilities
                  inherent to that class{" "}
                </span>
              </p>
            </div>

            <div className="a-step">
              <span className="step-number">2</span>
              <p className="step-text">
                <span>Configure the raid</span>
                <span className="step-description">
                  Configure the player(s) in your raid - their role, race and
                  even their talents are configurable
                </span>
              </p>
            </div>

            <div className="a-step">
              <span className="step-number">3</span>
              <p className="step-text">
                <span>Review your composition</span>
                <span className="step-description">
                  Get a full overview of your raid composition, buffs, debuffs,
                  utilities and cooldowns
                </span>
              </p>
            </div>

            <div className="a-step">
              <span className="step-number">4</span>
              <p className="step-text">
                <span>Save and share your raid</span>
                <span className="step-description">
                  Save your raid composition in the browser or locally and share
                  it with others either by exporting an input string
                </span>
              </p>
            </div>
          </div>
        </PagePreviewText>
        <img
          src="images/page-preview/raid_helper.svg"
          alt="Raid Helper"
          className="page-preview-image"
        />
      </PagePreviewContainer>
    </Main>
  );
};

export default Home;
