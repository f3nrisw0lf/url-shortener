import { useState, React } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';

const NewURLForm = (props) => {
	const { urls, location, appendNewUrl } = props;
	const [url, setUrl] = useInput('');
	const [slug, setSlug] = useInput('');
	const [isSlugExisting, setSlugExisting] = useState(false);
	const [existingUrl, setExistingUrl] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		const isSlugExisting = urls.filter((data) => data.id === slug).length;
		const findUrl = urls.filter((data) => data.url === url);

		if (!isSlugExisting && !findUrl.length) {
			setSlugExisting(false);
			return appendNewUrl({ url, slug });
		}

		if (findUrl.length) {
			console.log(findUrl);
			return setExistingUrl(findUrl[0]);
		}

		return setSlugExisting(true);
	};

	return (
		<Card className="p-4">
			<Form onSubmit={onSubmit}>
				<h1 className="text-center fw-bold">SHORTEN</h1>

				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label className="fw-bold">URL</Form.Label>
					<Form.Control type="text" placeholder="Enter URL" onChange={setUrl} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label className="fw-bold">Slug</Form.Label>
					<Form.Control type="text" placeholder="Slug" onChange={setSlug} />
				</Form.Group>

				{isSlugExisting && <Alert className="mb-3">SLUG EXISTING!</Alert>}
				{existingUrl && (
					<Alert className="mb-3">
						<h5>URL ALREADY EXISTING</h5>
						<Link to={`/api/${existingUrl.id}`}>
							{location.host}/api/{existingUrl.id}
						</Link>{' '}
						<br></br>
						{existingUrl.url}
					</Alert>
				)}
				<Button variant="primary" className="" type="submit">
					Submit
				</Button>
			</Form>
		</Card>
	);
};

export default NewURLForm;
