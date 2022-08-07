import create from "zustand";

const useStore = create((set) => ({
  jwt: localStorage.getItem("jwt"),
  isLoggedIn: !!localStorage.getItem("jwt"),
  username: localStorage.getItem("username"),
  setLoggedIn: (jwt, username) =>
    set((state) => {
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("username", username);
      return { ...state, isLoggedIn: !!jwt, username: username };
    }),
  logout: () =>
    set((state) => {
      localStorage.removeItem("jwt");
      localStorage.removeItem("username");
      return { ...state, isLoggedIn: false, username: "" };
    }),
}));

export { useStore };
