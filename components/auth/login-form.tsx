"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";

const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),
  password: z
    .string()
    .min(6, "Password minimal 6 karakter"),
});

type LoginFormData = z.infer<typeof LoginSchema>;

export default function LoginForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    reset 
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    toast.loading("Sedang memproses...", { id: "login" });

    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulasi API
      toast.success("Login berhasil! Selamat datang.", { id: "login" });
      reset();
    } catch {
      toast.error("Terjadi kesalahan, coba lagi.", { id: "login" });
    }
  };

return (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <Toaster />
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="space-y-4 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-sm min-w-[380px]"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
        Masuk ke Akun Anda
      </h2>

      <label className="block">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</span>
        <input 
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          className={`text-sm mt-1 w-full border rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:outline-none ${
            errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 dark:border-gray-600 focus:ring-primary"
          }`}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.email.message}
          </p>
        )}
      </label>

      <label className="block">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</span>
        <input 
          type="password"
          placeholder="Enter your password"
          {...register("password")}
          className={`text-sm mt-1 w-full border rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:outline-none ${
            errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 dark:border-gray-600 focus:ring-primary"
          }`}
          aria-invalid={!!errors.password}
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.password.message}
          </p>
        )}
      </label>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 rounded-lg text-white dark:text-gray-600 transition ${
            isSubmitting ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed" : "bg-primary hover:bg-primary/90"
          }`}
        >
          {isSubmitting ? "Memproses..." : "Masuk"}
        </button>
      </div>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Belum punya akun?{" "}
          <a href="/signup" className="text-primary hover:underline">
            Daftar sekarang
          </a>
        </p>
      </form>
    </div>
  );
}
