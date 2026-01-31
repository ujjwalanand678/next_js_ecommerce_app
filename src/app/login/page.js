"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/utils/api";
import { getToken, setAuthData } from "@/utils/auth";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (token) {
      router.replace("/productlist");
    }
  }, [router]);

  const [form, setForm] = useState({
    email: "",
    password: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(form.email))
      e.email = "Enter valid email";

    if (!passwordRegex.test(form.password))
      e.password =
        "Min 8 chars, 1 number, 1 special character";

    if (!mobileRegex.test(form.mobile))
      e.mobile = "Mobile must be 10 digits";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const data = await loginUser(form);

      setAuthData({
        token: data.token,
        userName: data.userName,
      });

      router.push("/productlist");
    } catch (err) {
      setErrors({ api: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[70vh] lg:h-[80vh] flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 w-full max-w-md border"
      >
        <h2 className="text-center font-serif text-2xl mb-6">
          LOGIN
        </h2>

        {errors.api && (
          <p className="text-red-600 text-sm mb-4">
            {errors.api}
          </p>
        )}

        {["email", "password", "mobile"].map((field) => (
          <div key={field} className="mb-4">
            <input
              type={field === "password" ? "password" : "text"}
              placeholder={field.toUpperCase()}
              value={form[field]}
              onChange={(e) =>
                setForm({ ...form, [field]: e.target.value })
              }
              className="w-full border px-3 py-2"
            />
            {errors[field] && (
              <p className="text-xs text-red-600 mt-1">
                {errors[field]}
              </p>
            )}
          </div>
        ))}

        <button
          disabled={loading}
          className="w-full bg-black text-white py-2"
        >
          {loading ? "LOGGING IN..." : "LOGIN"}
        </button>
      </form>
    </div>
  );
}
