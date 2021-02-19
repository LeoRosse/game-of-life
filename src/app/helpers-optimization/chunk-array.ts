export const chunkArray = <T>(arr: T[], size: number) =>
  [...Array(Math.ceil(arr.length / size))].map((_, i) =>
    arr.slice(i * size, i * size + size),
  );
