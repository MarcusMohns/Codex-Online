import {
  Main,
  PagePreviewText,
  PagePreviewContainer,
  PagePreviewCard,
  CardHeader,
  CardText,
  CardImage,
  CardContainer,
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
            Your companion for World of Warcraft: Wrath of the Lich
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
      <div id="divider">
        <h3>Raid Helper</h3>
      </div>
      <PagePreviewContainer>
        <PagePreviewText>
          <div>
            Organize WotLK{" "}
            <span className="highlight">Buffs, Debuffs and Utilities</span>. The
            Raid Helper helps you optimize your raids performance by giving you
            a full <span className="highlight">overview</span> of the{" "}
            <span className="highlight">raid buffs</span>, the{" "}
            <span className="highlight">players</span> in your raid and their
            different{" "}
            <span className="highlight">utilities, cooldowns and roles</span>.
            Additionally, feel free to <span className="highlight">save</span>{" "}
            your raid composition in the browser or locally and share it with
            others!
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
      </PagePreviewContainer>
    </Main>
  );
};

export default Home;
