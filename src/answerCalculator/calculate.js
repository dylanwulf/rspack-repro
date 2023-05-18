import { addNumbers } from './addNumbers';
import { firstNumber } from './firstNumber';
import { secondNumber } from './secondNumber';

export const calculate = () => {
    console.log('calculating answer');
    return addNumbers(firstNumber, secondNumber);
}
