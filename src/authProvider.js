const authProvider = {
  login: ({ username, password }) => {
    const request = new Request("http://localhost:8086/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        console.log(response);
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.text();
      })
      .then((auth) => {
        const parts = auth.split(" ");
        const token = parts[1] ? parts[1] : "";
        localStorage.setItem("auth", token);
      })
      .catch((err) => {
        throw new Error("Couldn't log in");
      });
  },

  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },

  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("auth");
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },

  checkAuth: () => {
    const auth = localStorage.getItem("auth");
    if (auth !== null) {
      return Promise.resolve();
    }

    return Promise.reject();
  },

  getPermissions: () => {
    return Promise.resolve();
  },
};

export default authProvider;
