import React, { useContext, createContext, useState } from "react";

const auth = {
  isAuthenticated: false,
  signin(cb) {
    auth.isAuthenticated = true;
    cb();
  },
  signout(cb) {
    auth.isAuthenticated = false;
    cb();
  },
};

//Define authentication methods in this function.
const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const signin = (cb) => {
    return auth.signin(() => {
      //This need to change
      setUser("user");
      cb();
    });
  };

  const signout = (cb) => {
    return auth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout,
  };
};

//Just create context.
const authContext = createContext();

//Give context to anywhere need.
const useAuth = () => {
  return useContext(authContext);
};

// Wrap all the children in the authContext.Provider to grant children authorities to access
// to the context.
// Let children access to auth method.
function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export { ProvideAuth, useAuth };
