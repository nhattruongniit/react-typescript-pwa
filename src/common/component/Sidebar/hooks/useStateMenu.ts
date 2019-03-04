import { useState } from 'react';

export const useStateMenu = (initialValue: boolean) => {
	const [isOpen, setIsOpen] = useState(initialValue);

	return {
		isOpen,
		openMenu: () => {
			setIsOpen(!isOpen);
		}
	};
};
