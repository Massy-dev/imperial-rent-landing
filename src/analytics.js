import ReactGA from 'react-ga';

const TRACKING_ID = "G-Q65QER4PPL"; // Remplace par ton ID de suivi Google Analytics
ReactGA.initialize(TRACKING_ID);

export const pageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const event = (category, action) => {
  ReactGA.event({
    category: category,
    action: action,
  });
};
