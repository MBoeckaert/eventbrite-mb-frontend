import create from "zustand";

const useStore = create((set) => ({
  jwt: localStorage.getItem("jwt"),
  isLoggedIn: !!localStorage.getItem("jwt"),
  username: localStorage.getItem("username"),
  userId: localStorage.getItem("userId"),
  setLoggedIn: (jwt, username, userId) =>
    set((state) => {
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("username", username);
      localStorage.setItem("userId", parseInt(userId));
      return {
        ...state,
        isLoggedIn: !!jwt,
        username: username,
        jwt: jwt,
        userId: userId,
      };
    }),
  logout: () =>
    set((state) => {
      localStorage.removeItem("jwt");
      localStorage.removeItem("username");
      return { ...state, isLoggedIn: false, username: "", jwt: "" };
    }),
  profileId: localStorage.getItem("profileId"),
  setProfileId: (profileId) =>
    set((state) => {
      localStorage.setItem("profileId", parseInt(profileId));
      return { ...state, profileId: profileId };
    }),
}));

export { useStore };
