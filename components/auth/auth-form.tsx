"use client";
import { useState } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${isLogin ? "Login" : "Daftar"} dengan: ${email}`);
  };

  return (
    <div className="bg-white p-8 rounded shadow-md max-w-sm w-full">
      <h2 className="text-2xl font-bold text-center mb-4">
        {isLogin ? "Login" : "Daftar Akun"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full border rounded p-2 focus:ring focus:outline-none"
            aria-label="Email"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 w-full border rounded p-2 focus:ring focus:outline-none"
            aria-label="Password"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90 transition"
        >
          {isLogin ? "Masuk" : "Daftar"}
        </button>
      </form>
      <p className="text-center mt-4 text-sm">
        {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-primary underline ml-1 focus:outline-none"
          aria-label={isLogin ? "Daftar Akun Baru" : "Kembali ke Login"}
        >
          {isLogin ? "Daftar" : "Login"}
        </button>
      </p>
    </div>
  );
}
