import { StyledHeader } from "./styled";

const Header = ({ title }) => (
    <header>
        <StyledHeader>{title}</StyledHeader>
    </header>
);
export default Header;