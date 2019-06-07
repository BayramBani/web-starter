/* CSS */
import 'bootstrap/dist/css/bootstrap.css';
import './../assets/css/style.css';

/* JS */
import 'bootstrap/dist/js/bootstrap.bundle';

// React App
import App from "./app/index.js";

App();

/*import Demo from './demo.js';
Demo();*/

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
