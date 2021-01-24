import { Neighborhood } from 'src/app/models/neighborhood';

const neighborhood: Neighborhood = [-1, 0, 1];

export const neighborhoodOfCell = (index: number): number[] =>
  neighborhood.map((el) => el + index);
