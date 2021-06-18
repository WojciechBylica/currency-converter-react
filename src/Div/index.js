
import "./style.css";

const Div = ({ actualDate }) => (
    <div className="main__div">
        {actualDate.toLocaleDateString(undefined, {
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

export default Div;