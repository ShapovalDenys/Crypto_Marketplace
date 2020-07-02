
export const getData = () => {
  return fetch(`https://blockchain.info/ru/ticker`)
    .then(response => response.json());
}
