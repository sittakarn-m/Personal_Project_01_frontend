import React, { useEffect, useState } from "react";
import useAuthStore from "../store/auth-store";
import { actionCurrentUser } from "../api/auth";

function ProtectRoute({ el, allows }) {
  const [ok, setOk] = useState(null);
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    if (token) {
      checkPermission();
    }
  }, [token]); // Depend on token

  const checkPermission = async () => {
    try {
      if (!token) {
        setOk(false);
        return;
      }

      const res = await actionCurrentUser(token);
      const role = res?.data?.result?.role;

      setOk(allows.includes(role));
    } catch (error) {
      console.error("Error fetching user role:", error);
      setOk(false);
    }
  };

  if (ok === null) {
    return <div>Loading...</div>;
  }

  return ok ? el : <div>Access Denied</div>;
}

export default ProtectRoute;
