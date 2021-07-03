
import { Wrapper } from "./styled";
import { useClock } from "./useClock";

const Clock = () => {
    const {
        currentDate,
        formatDate,
    } = useClock()

    return (
        <Wrapper>
            Dzisiaj jest: {formatDate(currentDate)}
        </Wrapper>
    );
};
export default Clock;