import { SignInCredentials } from "./types/auth";

const users = [
  { id: 1, userName: "user1", password: "111" },
  { id: 2, userName: "user2", password: "111" },
  { id: 3, userName: "user3", password: "111" },
];

export const fakeApi = {
  signIn: async (userSignIn: SignInCredentials) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(
          (user) =>
            user.userName === userSignIn.userName &&
            user.password === userSignIn.password
        );

        user
          ? resolve({
              status: "success",
              message: "Login success",
              data: {
                user,
                token: "1234567890",
              },
            })
          : reject({
              status: "failed",
              message: "Login failed",
              data: null,
            });
      }, 1000);
    });
  },
};
