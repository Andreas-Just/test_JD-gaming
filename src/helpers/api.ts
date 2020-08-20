const URL = 'https://andreas-just.github.io/test_JD-gaming/api/pages.json';

export const getData = <T>(): Promise<T[]> => {
  return fetch(URL)
    .then(response => response.json());
};
