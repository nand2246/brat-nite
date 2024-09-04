import axios from 'axios';

export async function load() {
	const { data } = await axios.get('http://localhost:3000/ingredients');
	return { ingredients: data };
}
