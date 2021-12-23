import { useState, React } from 'react';
import NewURLForm from './components/NewURLForm';

const Home = () => {
	const [urls, setUrls] = useState([{ id: 'abcd', url: 'helloworld.com' }]);
	return <NewURLForm urls={urls} setUrls={setUrls} />;
};

export default Home;
