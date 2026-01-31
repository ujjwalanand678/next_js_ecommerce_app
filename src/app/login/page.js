"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ---------- Validation ----------
  const validate = () => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(form.email))
      newErrors.email = "Enter a valid email address";

    if (!passwordRegex.test(form.password))
      newErrors.password =
        "Password must be 8+ chars, include 1 number & 1 special character";

    if (!mobileRegex.test(form.mobile))
      newErrors.mobile = "Mobile number must be 10 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---------- Submit ----------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch(
        "https://coding-assignment-server.vercel.app/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setErrors({ api: data.message || "Login failed" });
        setLoading(false);
        return;
      }

      // store token & user
      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({ userName: data.userName })
      );

      router.push("/productlist");
    } catch {
      setErrors({ api: "Network error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f6f6]">
      <div className="w-full max-w-md bg-white p-8 border border-gray-200">
        <h1 className="text-2xl font-serif text-center mb-8">
          RALPH LAUREN
        </h1>

        {errors.api && (
          <p className="text-red-600 text-sm mb-4 text-center">
            {errors.api}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full border px-3 py-2 text-sm"
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              className="w-full border px-3 py-2 text-sm"
            />
            {errors.password && (
              <p className="text-xs text-red-600 mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm mb-1">Mobile Number</label>
            <input
              type="text"
              value={form.mobile}
              onChange={(e) =>
                setForm({ ...form, mobile: e.target.value })
              }
              className="w-full border px-3 py-2 text-sm"
            />
            {errors.mobile && (
              <p className="text-xs text-red-600 mt-1">
                {errors.mobile}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 text-sm tracking-wide hover:bg-gray-800"
          >
            {loading ? "LOGGING IN..." : "LOGIN"}
          </button>
        </form>
      </div>
    </div>
  );
}
