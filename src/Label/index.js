// import { useState } from "react";

// const Label = ({ currencys, title }) => {

//     const [currencyFrom, setCurrencyFrom] = useState();
//     const onSelectCurrencyFrom = ({ target }) => {
//         setCurrencyFrom()
//         console.log(currencyFrom)
//     }


//     const [currencyTo, setCurrencyTo] = useState();
//     const onSelectCurrencyTo = ({ target }) => setCurrencyTo(target.value)

//     return (
//         <>
//             < label >
//                 {title}
//                 <select
//                     value={currencyFrom}
//                     onChange={onSelectCurrencyFrom}
//                     name="currencyFrom"
//                     className="form__field form__field--background"
//                     required
//                 >
//                     <option>PLN</option>
//                     <option>EUR</option>
//                     <option>{currencys[2].name}</option>
//                     <option>{currencys[3].name}</option>
//                 </select>
//             </label >
//             < label >
//                 {title}
//                 <select
//                     value={currencyTo}
//                     onChange={onSelectCurrencyTo}
//                     name="currencyTo"
//                     className="form__field form__field--background"
//                     required
//                 >
//                     <option>{currencys[0].name}</option>
//                     <option>{currencys[1].name}</option>
//                     <option>{currencys[2].name}</option>
//                     <option>{currencys[3].name}</option>
//                 </select>
//             </label >
//         </>
//     )
// };

// export default Label;