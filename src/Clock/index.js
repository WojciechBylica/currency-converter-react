
import "./style.css";

const formatDate = (date) => date.toLocaleDateString(undefined, {
    month: "long",
    weekday: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
});

const Clock = ({ date }) => (
    <div className="clock">
        {formatDate(date)}
    </div>
);

export default Clock;