import SignupForm from "@/components/auth/signup-form";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <div className="animate-fade-in">
        <SignupForm />
      </div>
    </div>
  );
}
