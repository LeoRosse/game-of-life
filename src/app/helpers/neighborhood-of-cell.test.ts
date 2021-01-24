import { neighborhoodOfCell } from './neighborhood-of-cell';

test('`neighborhoodOfCell` calculate relative neighborhood of cell in matrix', () => {
  expect(neighborhoodOfCell(3)).toMatchObject([2, 3, 4]);
});
