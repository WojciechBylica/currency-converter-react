import "./style.css";
const onFormSubmit = (event)=>{
    event.preventDefault();
};
const Form = ({ label, divButtons }) => (
    <form className="form" onSubmit={onFormSubmit}>
        <fieldset className="form__fieldset">
            {label}
        </fieldset>
        {divButtons}
    </form>

);

export default Form;