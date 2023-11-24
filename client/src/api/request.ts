// import "dotenv/config.js";

export const request = async (payload: any, options: any = {}) => {
  console.log(payload);
  const res = await fetch(`http://localhost:8000/graphql`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      ...options,
    },
    body: JSON.stringify(payload),
  });
  const { data } = await res.json();
  return data;
};


