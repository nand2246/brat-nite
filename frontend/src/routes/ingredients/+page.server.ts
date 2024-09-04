import { PUBLIC_BACKEND_URL } from '$env/static/public';
import axios from 'axios';

export async function load() {
	const { data } = await axios.get(`${PUBLIC_BACKEND_URL}/ingredients`);
	return { ingredients: data };
}
