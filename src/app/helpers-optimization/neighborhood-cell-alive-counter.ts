export const neighborhoodCellAliveCounter = (
  input: (number | undefined)[],
): number =>
  input.reduce<number>((acc, curr) => {
    if (curr !== undefined) acc = acc + curr;
    return acc;
  }, 0);
