const Fieldset = ({children, legend}) => {
return (
    <fieldset className="form__fieldset">
        <legend>{legend}</legend>
        {children}
    </fieldset>
)
};



export default Fieldset;