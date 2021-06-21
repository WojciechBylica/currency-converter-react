
import "./style.css";

const Clock = ({ date }) => (
    <div className="clock">
        {date.toLocaleDateString(undefined, {
            month: "long",
            weekday: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        })}
    </div>
);

export default Clock;