import { React, useContext, useEffect } from 'react';
import { UrlsContext } from '../contexts/UrlsContext';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';

const RedirectExternal = () => {
	const { urls } = useContext(UrlsContext);
	const { id } = useParams();

	useEffect(async () => {
		console.log(urls);
		await urls.forEach((element) => {
			if (element.id === id) window.location = element.url;
		});
	}, [urls]);

	return <Navigate to="/" />;
};

export default RedirectExternal;
