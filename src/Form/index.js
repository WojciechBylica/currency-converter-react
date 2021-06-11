import "./style.css";

const Form = ({ label, divButtons }) => (
    <form className="form">
        <fieldset className="form__fieldset">
            {label}
        </fieldset>
        {divButtons}
    </form>

);

export default Form;