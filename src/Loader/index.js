import { StyledLoader, StyledImage } from "./styled";

const Loader = ({ body, source, alt }) => (
    <>
        <StyledLoader>
            <p>{body}</p>
            <StyledImage src={source} alt={alt} />
        </StyledLoader>
    </>
);
export default Loader;