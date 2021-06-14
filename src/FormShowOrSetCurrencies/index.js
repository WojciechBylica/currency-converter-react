// import Fieldset from "../Fieldset"
// const FormShowOrSetCurrencies = ({ currencies, hideRates, setNewCurrencyValue, toggleCurrencyValue }) => {

//     const onFormInput = (event) => {
//         setNewCurrencyValue(event.target.value)
//     }

//     return (
//         <>
//             <form
//                 onInput={onFormInput}
//                 className={` ${hideRates === true ? "form__currency--hidden" : ""}`}>
//                 <Fieldset legend="Kursy walut">

//                     {currencies.slice(1).map(currency =>
//                         <label>
//                             {currency.name}
//                             <input
//                                 onChange={() => toggleCurrencyValue(currency.id)}
//                                 key={currency.id}
//                                 type="number"
//                                 className="form__field"
//                                 min={0.01}
//                                 step="0.01"
//                                 // value={currency.value}
//                             // readOnly={true}
//                             />
//                         </label>
//                     )}
//                 </Fieldset>
//             </form>
//         </>
//     );
// };

// export default FormShowOrSetCurrencies;




