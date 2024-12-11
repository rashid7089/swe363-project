export const apiBaseUrl = "http://localhost:8080/api";

const apiBaseUrlAuth = `${apiBaseUrl}/auth`;

const sendRequest = async (url, method, body, token = null) => {
  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const options = {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  };
  

  try {
    const response = await fetch(`${apiBaseUrlAuth}${url}`, options);
    const data = await response.json();
    return {data, status: response.status};
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
};


// POST /register
const registerUser = (name, email, password, usertype, kfupmID) =>
  sendRequest("/register", "POST", { name, email, password, usertype, kfupmID });


// POST /login
const loginUser = (email, password) =>
  sendRequest("/login", "POST", { email, password });


// POST /logout
const logoutUser = () => sendRequest("/logout", "POST", null);


// GET /all
const getAllUsers = (token) => sendRequest("/all", "GET", null, token);


// PUT /update/:id
const updateUser = (userId, updates, token) =>
  sendRequest(`/update/${userId}`, "PUT", updates, token);


// DELETE /delete/:id
const deleteUser = (userId, token) =>
  sendRequest(`/delete/${userId}`, "DELETE", null, token);


// GET /profile/:id
const getUserProfile = (userId, token) =>
  sendRequest(`/profile/${userId}`, "GET", null, token);


// POST /forgot-password
const forgotPassword = (email) =>
  sendRequest("/forgot-password", "POST", { email });


// POST /reset-password
const resetPassword = (resetToken, newPassword) =>
  sendRequest("/reset-password", "POST", { resetToken, newPassword });


// POST /change-password
const changePassword = (userId, oldPassword, newPassword, token) =>
  sendRequest(
    "/change-password",
    "POST",
    { userId, oldPassword, newPassword },
    token
  );

// ------------------------- Export Functions -------------------------
export {
  registerUser,
  loginUser,
  logoutUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getUserProfile,
  forgotPassword,
  resetPassword,
  changePassword,
};