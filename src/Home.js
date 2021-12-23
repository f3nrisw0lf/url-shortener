import { React, useContext } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UrlsContext } from './contexts/UrlsContext';
import NewURLForm from './components/NewURLForm';

const Home = () => {
	const { urls, appendNewUrl } = useContext(UrlsContext);

	return (
		<div className="m-4 p-4">
			<NewURLForm urls={urls} appendNewUrl={appendNewUrl} />

			<h1 className="mt-4 mb-2 fw-bold">Public Urls</h1>
			{urls &&
				urls.map((url) => {
					return (
						<ListGroupItem key={url.id} className="p-3">
							<Link to={`/api/${url.id}`}>{url.id}</Link>
							<h2>{url.url}</h2>
						</ListGroupItem>
					);
				})}
		</div>
	);
};

export default Home;
