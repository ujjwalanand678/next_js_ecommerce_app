const BASE_URL = "https://coding-assignment-server.vercel.app";

//  LOGIN API

export const loginUser = async ({ email, password, mobile }) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, mobile }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
};


//  VALIDATE TOKEN API

export const validateTokenApi = async (token) => {
  const res = await fetch(`${BASE_URL}/validateToken`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Token validation failed");
  }

  return data;
};


//  FETCH PRODUCTS API

export const fetchProducts = async (token) => {
  const res = await fetch(`${BASE_URL}/products`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return data;
};
