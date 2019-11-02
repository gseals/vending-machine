import smash from '../../helpers/data/smash';
import util from '../../helpers/utilities';
import snackComponent from '../snacks/snacks';
import './machine.scss';

const buildTheMachine = () => {
  smash.getCompleteMachine()
    .then((positions) => {
      let domString = '<h2>VENDING MACHINE</h2>';
      domString += '<div id="snack-section" class="d-flex flex-wrap">';
      positions.forEach((position) => {
        domString += snackComponent.makeASnack(position);
      });
      domString += '</div>';
      util.printToDom('stock', domString);
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
