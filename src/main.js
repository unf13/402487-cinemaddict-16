import {createSiteMenuTemplate} from './view/menu-view.js';
import {createFilmCardTemplate} from './view/film-card-view.js';
import {createFilmDetailsPopupTemplate} from './view/film-details-popup-view.js';
import {createShowMoreButtonTemplate} from './view/show-more-button-view.js';
import {createUserRankTemplate} from './view/user-rank-view.js';
import {createSortSettingsTemplate} from './view/sort-settings-view.js';
import {createFilmsContainerTemplate} from './view/films-container-view.js';
import {createHeaderProfileTemplate} from './view/header-profile-view.js';
import {createFooterStatisticsTemplate} from './view/footer-statistics-view.js';

const DEFAULT_FILMS_NUMBER = 5;

const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

const main = document.querySelector('.main');
const footerStatsContainer = document.querySelector('.footer__statistics');
const fragment = document.createDocumentFragment();
const mainContainer = fragment.appendChild(main.cloneNode(true));

const filmCard = createFilmCardTemplate();

const renderTemplate = (container, template, position) => {
  container.insertAdjacentHTML(position,template);
};

const headerContainer = document.querySelector('.header');

renderTemplate(headerContainer,createHeaderProfileTemplate(),RenderPosition.BEFOREEND);
renderTemplate(mainContainer,createSiteMenuTemplate(),RenderPosition.AFTERBEGIN);
renderTemplate(mainContainer,createUserRankTemplate(),RenderPosition.BEFOREEND);
renderTemplate(mainContainer,createSortSettingsTemplate(),RenderPosition.BEFOREEND);
renderTemplate(mainContainer,createFilmsContainerTemplate(),RenderPosition.BEFOREEND);

const filmsContainer = mainContainer.querySelector('.films-list__container');

for (let numberOfFilms = 1; numberOfFilms <= DEFAULT_FILMS_NUMBER; numberOfFilms++) {
  renderTemplate(filmsContainer,filmCard,RenderPosition.BEFOREEND);
}

renderTemplate(filmsContainer,createShowMoreButtonTemplate(),RenderPosition.AFTEREND);
renderTemplate(footerStatsContainer,createFooterStatisticsTemplate(),RenderPosition.AFTERBEGIN);

renderTemplate(document.querySelector('.footer'),createFilmDetailsPopupTemplate(),RenderPosition.AFTEREND);


document.body.replaceChild(fragment,main);
