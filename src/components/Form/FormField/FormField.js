import React from 'react';

const FormField = (props) => {
	return (
		<p className={props.className}>
			<label htmlFor={props.inputId}>{props.labelValue}</label>
            {props.children}
		</p>
	);
};

export default FormField;
