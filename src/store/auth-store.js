import { create } from "zustand";
import { actionLogin } from "../api/auth";
import { persist } from "zustand/middleware";

// Step 1: Create Store
const useAuthStore = create(
  persist(
    (set) => ({
      user: [],
      token: null,
      actionLoginWithZustand: async (value) => {
        try {
          const res = await actionLogin(value);
          // console.log("Hello, Zustand",res) ดูว่าได้อะไรมาบ้าง แล้วจะเอาอะไรไปใช้
          const { payload, token } = res.data;
          console.log(payload.role);
          console.log(token);
          set({ user: payload, token: token });

          return { success: true, role: payload.role };
        } catch (error) {
            console.error("Login Error:", error.response?.data?.message)
          return { success: false, error: error.response?.data?.message || "Login failed" };
        }
      },
    }),
    { name: "auth-store" }
  )
);

// Step 2: Exports Store
export default useAuthStore;
