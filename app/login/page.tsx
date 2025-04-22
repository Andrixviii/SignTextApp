import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="animate-fade-in">
        <LoginForm />
      </div>
    </div>
  );
}
