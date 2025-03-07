import { useState } from 'react';
import phrases from './phrases.json';
import { randomItem } from './utils';
import PhraseCard from './components/PhraseCard';
import Button from './components/Button';
import { img1, img2, img3, img4 } from './assets';
import FadeContainer from './components/FadeContainer';

const images = [img1, img2, img3, img4];

function App() {
	const [phrase, setPhrase] = useState(randomItem(phrases));
	const [image, setImage] = useState(randomItem(images));
	const [fade, setFade] = useState(false);

	const changePhrase = () => {
		setFade(true);
		setTimeout(() => {
			setPhrase(randomItem(phrases));
			setImage(randomItem(images));
		}, 500);
		setTimeout(() => setFade(false), 500);
	};

	return (
		<FadeContainer fade={fade}>
			<div className="container" style={{ backgroundImage: `url('${image}')` }}>
				<h1 className="title">Galleta de la Fortuna</h1>
				<PhraseCard phrase={phrase.phrase} author={phrase.author} />
				<Button handlePhrase={changePhrase}>Ver otro</Button>
			</div>
		</FadeContainer>
	);
}

export default App;
