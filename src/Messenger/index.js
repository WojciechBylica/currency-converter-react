import { StyledMessenger, StyledImage } from "./styled";

const Messenger = ({ body, source, alt }) => (
    <>
        <StyledMessenger>
            <p>{body}</p>
            <StyledImage src={source} alt={alt} />
        </StyledMessenger>
    </>
);
export default Messenger;