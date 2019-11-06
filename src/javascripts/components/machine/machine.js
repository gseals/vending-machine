import $ from 'jquery';
import smash from '../../helpers/data/smash';
import util from '../../helpers/utilities';
import snackComponent from '../snacks/snacks';
import './machine.scss';
import snackData from '../../helpers/data/snackData';

const buySnack = (e) => {
  e.stopImmediatePropagation();
  const snackId = e.target.id.split('buy-')[1];
  snackData.buySnack(snackId)
    // eslint-disable-next-line no-use-before-define
    .then(() => buildTheMachine())
    .catch((error) => console.error(error));
};

const buildTheMachine = () => {
  smash.getCompleteMachine()
    .then((positions) => {
      let domString = '<h2>VENDING MACHINE</h2>';
      domString += '<div id="snack-section" class="d-flex flex-wrap">';
      positions.forEach((position) => {
        domString += snackComponent.makeASnack(position);
      });
      domString += '</div>';
      util.printToDom('machine', domString);
      $('#machine').on('click', '.buy-snack', buySnack);
    })

    .catch((error) => console.error(error));
};

export default { buildTheMachine };


// build a dom string **
// h2 that says VENDING MACHINE **
// div with an id of snack-section, class=d-flex flex-wrap **
// forEach over positions - call a componenet called snacks
// snacks component should return a bootstrap card
// printToDom('stock', domString) **
