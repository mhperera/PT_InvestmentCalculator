import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
	return (
		<button
			type={props.type}
			className={`${styles.button} ${styles[props.className]} `}
			style={props.style}
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
};

export default Button;
