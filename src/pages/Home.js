import { getData } from '../utils/getData';

export const Home = async () => {
  const items = await getData();

  const view = `
    <div class="Items">
      ${items.map(item =>
        `
          <article class="Item">
            <a href="#/${item.id}">
              <img src="${item.image_url}" alt="${item.product_name}"/>
              <p><strong>Product Name:</strong> ${item.product_name}</p>
              <p><strong>Product Price:</strong> ${item.price}</p>
              <p><strong>Description:</strong> ${item.description}</p>
              <button>Add Car</button>
            </a>
          </article>
        `
      ).join('')}
    </div>
  `;

  return view;
}