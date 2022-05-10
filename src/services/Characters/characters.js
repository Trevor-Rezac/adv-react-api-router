export async function fetchCharacters() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const { results } = await res.json();
  console.log('results!!!!', results);
  return results;
}
