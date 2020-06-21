import { getHash } from '../utils/getHash';
import { getData } from '../utils/getData';

export const Items = async () => {
	const id = getHash();
	const item = await getData(id);

	const view = `
		<div class="Item">
			<article>
				<img src="${item.image_url}" alt="${item.product_name}" />
			</article>
			<article>
				<p><strong>Name:</strong> ${item.product_name}</p>
				<p><strong>Name:</strong> ${item.price}</p>
				<p><strong>Description:</strong> ${item.description}</p>
			</article>
		</div>
	`;

	return view;
}