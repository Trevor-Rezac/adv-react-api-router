export async function fetchCharacters() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const { results } = await res.json();
  console.log('fetchCharacters results', results);
  return results;
}

export async function fetchCharacterData(id) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const results = await res.json();
  return results;
}

export async function fetchNewCharactersPage(pageNumber) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
  );
  const { results } = await res.json();
  return results;
}
