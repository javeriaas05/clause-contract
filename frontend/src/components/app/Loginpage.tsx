
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner"; // ✅ Import Sonner toast

const Loginpage = () => {
  const navigate = useNavigate();

  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");

        // ❌ Show error toast
        toast.error("Your login has failed");

        setLoading(false);
        return;
      }

      // Save token (example: localStorage)
      localStorage.setItem("token", data.data.token);

      // ✅ Show success toast
      toast.success("Your login is successful");

      // Redirect to dashboard (or wherever)
      navigate("/dashboard");
    } catch (err: any) {
      setError("Something went wrong. Please try again.");

      // ❌ Show error toast
      toast.error("Your login has failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100">
      <div
        className="flex min-h-screen items-center justify-center
          py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      >
        <Card className="w-full max-w-sm bg-[#ebeee8]">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            <CardAction>
              <Link to={"/Signup"}>
                <Button className="bg-[#bcd9d0]" variant="link">
                  Sign Up
                </Button>
              </Link>
            </CardAction>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col gap-6 w-full">
                <div className="grid gap-2 w-full">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="grid gap-2 w-full">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to={"/forgot-password"}>
                      <span className="text-sm underline-offset-4 hover:underline cursor-pointer">
                        Forgot your password?
                      </span>
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full"
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>

              <CardFooter className="flex flex-col gap-3 mt-6 w-full">
                <Button
                  type="submit"
                  className="w-full bg-[#0f4939] hover:bg-green-900"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Loginpage;







