import token from "./token";

// async function addNewMembersData(arrayForNewData) {
//   const result = await Promise.all(
//     arrayForNewData.map(async (el) => {
//       const newElement = await fetchPersonalData(el);
//       return await newElement;
//     })
//   );

//   return result;
// }
export async function fetchAllPages(url, startPage = 1) {
  let result = [];
  let currentPage = startPage;
  let morePagesAvailable = true;

  while (morePagesAvailable) {
    const response = getJSON(`${url}?page=${currentPage}`);
    const data = response;
    result = [...result, ...data];
    currentPage += 1;
    morePagesAvailable = data.length > 0;
  }

  return result;
}

export function getJSON(url) {
  return fetch(url, {
    headers: {
      Authorization: `token ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Something went wrong sorry");
  });
}
