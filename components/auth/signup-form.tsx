"use client";
import { useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Password doesn't match");
      return;
    }

    alert(`Akun dibuat untuk: ${email}`);
  };

return (
  <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md max-w-sm w-full">
    <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">Sign up</h2>
    
    <label className="block">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</span>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="text-sm mt-1 w-full border dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:outline-none"
        aria-label="Email untuk daftar"
        placeholder="Enter your email"
      />
    </label>

    <label className="block">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</span>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="text-sm mt-1 w-full border dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:outline-none"
        aria-label="Password untuk daftar"
        placeholder="Enter your password"
      />
    </label>

    <label className="block">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Konfirmasi Password</span>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        className="text-sm mt-1 w-full border dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:outline-none"
        aria-label="Konfirmasi password"
        placeholder="Confirm your password"
      />
    </label>

    {error && (
      <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
    )}

    <div className="pt-4">
      <button type="submit" className="w-full bg-primary text-white dark:text-gray-600 py-2 rounded-lg hover:bg-primary/90 transition">
        Create an Account
      </button>   
    </div>
  </form>
  );
}