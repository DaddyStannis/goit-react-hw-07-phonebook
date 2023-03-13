const BASE_URL = 'https://640dd10e1a18a5db83803058.mockapi.io/api/contacts/';

async function requestContacts() {
  return fetchJson(BASE_URL);
}

async function deleteContact(id) {
  const fullUrl = `${BASE_URL}/${id}`;
  const params = {
    method: 'DELETE',
  };
  return fetchJson(fullUrl, params);
}

async function createContact(name, number) {
  const requestData = {
    name,
    number,
  };

  const params = {
    method: 'POST',
    body: JSON.stringify(requestData),
  };
  console.log(params);
  return fetchJson(BASE_URL, params);
}

async function fetchJson(url, params) {
  return fetch(url, params).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  });
}

export { requestContacts, deleteContact, createContact };
