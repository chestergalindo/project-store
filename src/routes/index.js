import { Header } from '../templates/Header';
import { Home } from '../pages/Home';
import { Items } from '../pages/Items';
import { Login } from '../pages/Login';
import { resolveRoutes } from '../utils/resolveRoutes';
import { getHash } from '../utils/getHash';

const routes = {
  '/': Home,
  '/:id': Items
}

export const router = async () => {
  const header = null ||document.getElementById('header');
  const content = null || document.getElementById('store');

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render =  routes[route] ? routes[route] : '';
  content.innerHTML = await render();

}