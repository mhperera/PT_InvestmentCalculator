import React, {useRef} from 'react';
import FormGroup from '../../UI/FormGroup/FormGroup';
import FormField from '../FormField/FormField';
import styles from './Form.module.css';
import Button from '../../UI/Button/Button';

const Form = (props) => {

	const currentSavingsRef = useRef();
	const yearlyContributionRef = useRef();
	const expectedReturnRef = useRef();
	const durationRef = useRef();

	const handleFormSubmission = (event) => {

		event.preventDefault();

		const currentSavings = currentSavingsRef.current.value;
		const yearlyContribution = yearlyContributionRef.current.value;
		const expectedReturn = expectedReturnRef.current.value;
		const duration = durationRef.current.value;

		if(currentSavings.trim().length === 0){
			return props.onError("Invalid Current Saving Value");
		}
		if(yearlyContribution.trim().length === 0){
			return props.onError("Invalid Yearly Contribution");
		}
		if(expectedReturn.trim().length === 0){
			return props.onError("Invalid Expected Return");
		}
		if(duration.trim().length === 0){
			return props.onError("Invalid Duration");
		}

		const userInput = {
			'current-savings' : currentSavings,
			'yearly-contribution' : yearlyContribution,
			'expected-return' : expectedReturn,
			'duration' : duration,
		}

		currentSavingsRef.current.value = '';
		yearlyContributionRef.current.value = '';
		expectedReturnRef.current.value = '';
		durationRef.current.value = '';

		props.onFormSubmit(userInput);

	}

	return (
		<form className={styles.form} onSubmit={handleFormSubmission}>
			<FormGroup>
				<FormField
					inputId="current-savings"
					labelValue="Current Savings ($)"
				>
					<input type="number" id="current-savings" ref={currentSavingsRef}/>
				</FormField>
				<FormField
					inputId="yearly-contribution"
					labelValue="Yearly Savings ($)"
				>
					<input type="number" id="yearly-contribution" ref={yearlyContributionRef}/>
				</FormField>
			</FormGroup>
			<FormGroup>
				<FormField
					inputId="expected-return"
					labelValue="Expected Interest (%, per year)"
				>
					<input type="number" id="expected-return" ref={expectedReturnRef}/>
				</FormField>
				<FormField
					inputId="duration"
					labelValue="Investment Duration (years)"
				>
					<input type="number" id="duration" ref={durationRef}/>
				</FormField>
			</FormGroup>
			<p className="actions">
				<Button type="reset" className="buttonAlt" value="Reset" />
				<Button type="submit" className="button" value="Calculate" />
			</p>
		</form>
	);
};

export default Form;
