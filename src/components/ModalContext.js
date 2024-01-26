import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
	const [currentModal, setCurrentModal] = useState(null);

	const openModal = (modalId) => setCurrentModal(modalId);
	const closeModal = () => setCurrentModal(null);

	return (
		<ModalContext.Provider value={{ currentModal, openModal, closeModal }}>
			{children}
		</ModalContext.Provider>
	);
};
