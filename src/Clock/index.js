
import { Wrapper } from "./styled";
import { useClock } from "./useClock";

const Clock = () => {
    const currentDate = useClock()
    const formatDate = (currentDate) => currentDate.toLocaleDateString(undefined, {
        month: "long",
        weekday: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });

    return (
        <Wrapper>
            Dzisiaj jest: {formatDate(currentDate)}
        </Wrapper>
    );
};
export default Clock;