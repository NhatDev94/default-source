type User = {
  id: number;
  userName: string;
};

type initialStateType = {
  user?: User;
};

const initialState: initialStateType = {
  user: undefined,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        user: action.payload,
      };
    case "SIGN_OUT":
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
};

export default userReducer;
