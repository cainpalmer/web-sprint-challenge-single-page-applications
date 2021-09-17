// Imports
import * as yup from 'yup';

// Validation
const Validation = yup.object().shape({
    name: yup.string().trim().min(4, 'Name must be at least 4 characters long')
});

// Exports
export default Validation;