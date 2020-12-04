export async function fetchDataFromArrayOfLinks(arrayOfUrl) {
  const arrayOfArrays = await Promise.all(
    arrayOfUrl.map(async (el) => getArrayOfOptions(el)),
  );
  const results = [];
  arrayOfArrays.map((el) => results.push(...el));
  return results;
}

export async function getArrayOfOptions(url) {
  const json = await getJSON(url);
  return json.hits;
}

export function getJSON(url) {
  return fetch(url).then((res) => res.json());
}
