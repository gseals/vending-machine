import machineData from './machineData';
import positionData from './positionData';

const getCompleteMachine = () => new Promise((resolve, reject) => {
  machineData.getMachine()
    .then((singleMachine) => positionData.getAllPositionsByMachineId(singleMachine.id))
    .then((positions) => resolve(positions))
    .catch((error) => reject(error));
  // first, getMachines - returns first machine(hard coding)
  // second, use machineId to get all positions for that machine
  // third, use machineId to get all snack positions
  // fourth, use uid of snackPositions/positions to get available snacks for that machine
  // fifth, SMASH EM - when you smash things together, somethings gets returned. in this case, return an array of positions (in order A1, A2, A3, etc.).
  // fifth cont. so positions should have position.snack, if a snack exists at that position
});

export default { getCompleteMachine };
