const baseUrl = "https://5f27becdf5d27e001612e484.mockapi.io/api/v1/proect";

export const createEvent = (id) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(id),
  }).then((response) => {
    if (!response.ok)
      throw new Error("Internal server error. Can't display events");
  });
};

export const fetchEventsList = () => {
  return fetch(baseUrl).then((response) => {
    if (response.ok) return response.json();
  });
};

export const handleEventDelete = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) throw new Error("You didn't delete this event");
  });
};
