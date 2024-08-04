import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ZoLa-Chat/", // Đường dẫn cơ sở phải khớp với tên repository của bạn
  plugins: [react()],
});
