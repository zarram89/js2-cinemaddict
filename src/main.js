import HeaderProfileView from "./view/header-profile-view";

import { render } from "./render";

const siteHeaderElement = document.querySelector('.header');

render(new HeaderProfileView(), siteHeaderElement);
