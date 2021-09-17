
// Imports
import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import schema from './Validation.js';

// Initial Variables
const initialFormValues = {
    name: '',
    size: '',
    toppings: '',
    special: '',
    agree: false,
}
const initialErrors = {
    name: '',
}
const initialDisabled = true;

// Form
function Form({}) {

    // Variables
    const [formValues, setFormValues] = useState(initialFormValues);
    const [errors, setErrors] = useState(initialErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    const handleChange = (event) => {
        validate(event.target.name, event.target.value)
        setFormValues({ ...formValues, [event.target.name]: event.target.value})
    };
    const handleSubmit = (event) => {
        event.preventDefault()
    };
    const validate = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then(() => setErrors({ ...errors, [name]: '' }))
        .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
    }

    // Effects
    useEffect(() => {
        schema.isValid(formValues).then(valid => {
            setDisabled(!valid)
        })
    }, {formValues})

    // Returns
    return (
        <form id = 'pizza-form' onSubmit = {handleSubmit}>

            <label htmlFor = 'name'>Name</label>
            <input id = 'name-input' type = 'text' name = 'name' onChange = {handleChange} value = {formValues.name} />

            <label htmlFor = 'size'>Size</label>
            <select id = 'size-dropdown' name = 'size' onChange = {handleChange} value = {formValues.size}>
                <option value = ''>Select a size!</option>
                <option value = 'small'>Small</option>
                <option value = 'medium'>Medium</option>
                <option value = 'large'>Large</option>
            </select>

            <label>Ham
                <input name = 'agree' type = 'checkbox' />
            </label>
            <label> Pineapple
                <input name = 'agree' type = 'checkbox' />
            </label>
            <label> Banana Peppers
                <input name = 'agree' type = 'checkbox' />
            </label>
            <label> Beef Pepperoni
                <input name = 'agree' type = 'checkbox' />
            </label>

            <label htmlFor = 'special'>Special Pizzas!</label>
            <input id = 'special-text' type = 'text' name = 'special' onChange = {handleChange} value = {formValues.special} />
            <button diabled = {disabled}>Submit!</button>

        </form>
    )
}

// Exorts
export default Form