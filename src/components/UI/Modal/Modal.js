import React from 'react';
import Button from '../Button/Button';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					content={props.content}
					onModalClose={props.onModalClose}
				/>,
				document.getElementById('root-overlay')
			)}

			{ReactDOM.createPortal(
				<ModalBackDrop onModalClose={props.onModalClose} />,
				document.getElementById('root-backdrop')
			)}
		</>
	);
};

const ModalOverlay = (props) => {
	return (
		<div
			className={styles.modal}
			style={{
				padding: '0.5rem 1rem',
				border: '1px solid #41419c21',
			}}
		>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				<p>{props.content}</p>
			</div>
			<footer className={styles.footer}>
				<Button style={{ margin: '0' }} onClick={props.onModalClose} value='OK' />
			</footer>
		</div>
	);
};

const ModalBackDrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onModalClose} />;
};

export default Modal;
