import Cookies from "js-cookie";

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(
      "https://asia-southeast2-erditona-dev.cloudfunctions.net/barokahai/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Ups Login failed. Please try again.");
    }

    Cookies.set("authToken", data.token, { expires: 1 });

    return data;
  } catch (error) {
    throw new Error(error.message || "Sorry An error occurred. Please try again.");
  }
};
