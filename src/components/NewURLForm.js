import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import useInput from '../hooks/useInput';

const NewURLForm = (props) => {
	const { urls, appendNewUrl } = props;
	const [url, setUrl] = useInput('');
	const [slug, setSlug] = useInput('');

	const onSubmit = (e) => {
		e.preventDefault();
		const isUrlExisting = urls.filter((data) => data.id === slug).length;
		if (!isUrlExisting) {
			appendNewUrl({ url, slug });
		}
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

				<Button variant="primary" className="" type="submit">
					Submit
				</Button>
			</Form>
		</Card>
	);
};

export default NewURLForm;
