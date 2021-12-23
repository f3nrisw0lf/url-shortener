import { createContext, useMemo, React } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const UrlsContext = createContext();

export const UrlsProvider = (props) => {
	const [urls, setUrls] = useLocalStorage('urls', [
		{ id: 'abcd', url: 'https://www.google.com/' },
		{ id: 'npm', url: 'https://www.npmjs.com/package/react-router-dom' },
	]);

	const appendNewUrl = (data) => {
		setUrls((prevUrls) => [...prevUrls, { id: data.slug, url: data.url }]);
	};

	const value = useMemo(() => ({ urls, appendNewUrl }), [urls]);

	return (
		<UrlsContext.Provider value={value}>{props.children}</UrlsContext.Provider>
	);
};
