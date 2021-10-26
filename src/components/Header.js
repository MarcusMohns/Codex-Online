import { StyledHeader } from './styles/Header.styled';

const Header = ({ title }) => {
	return <StyledHeader>{title}</StyledHeader>;
};

Header.defaultProps = {
	title: 'Header'
};
export default Header;
