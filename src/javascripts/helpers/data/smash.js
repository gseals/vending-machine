import machineData from './machineData';
import positionData from './positionData';
import snackPositionData from './snackPositionData';
import snackData from './snackData';

const getCompleteMachine = () => new Promise((resolve, reject) => {
  machineData.getMachine()
    .then((singleMachine) => positionData.getAllPositionsByMachineId(singleMachine.id))
    .then((positions) => {
      snackPositionData.getAllSnackPositionsByMachineId(positions[0].machineId)
        .then((snackPositions) => {
          snackData.getSnacksByUid(positions[0].uid).then((snacks) => {
            console.log('snackPositions', snackPositions);
            resolve(snacks);
          });
        });
    })
    .catch((error) => reject(error));
  // first, getMachines - returns first machine(hard coding)
  // second, use machineId to get all positions for that machine
  // third, use machineId to get all snack positions
  // fourth, use uid of snackPositions/positions to get available snacks for that machine
  // fifth, SMASH EM - when you smash things together, somethings gets returned. in this case, return an array of positions (in order A1, A2, A3, etc.).
  // fifth cont. so positions should have position.snack, if a snack exists at that position
});

export default { getCompleteMachine };
