import React from 'react';
import styles from './FormGroup.module.css';

const FormGroup = (props) => {
	return (
		<div className={`${styles['input-group']} ${props.className}`}>
			{props.children}
		</div>
	);
};

export default FormGroup;
