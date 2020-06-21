import { router } from './routes/index';
import '../src/styles/styles.scss'

window.addEventListener('load', router);
window.addEventListener('hashchange', router);