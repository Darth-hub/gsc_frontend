import { createContext, useEffect, useState, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdTokenResult();
        const role = token.claims.role;
        const man = { role, ...user };
        setUser(man);
      } else {
        setUser(null);
      }
      setLoading(false); // Update loading state after auth check
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);