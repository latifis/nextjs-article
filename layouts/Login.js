import { useState } from "react";
import { useRouter } from "next/router";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lakukan validasi formulir atau kirim data login ke server jika diperlukan
    // Contoh penanganan login:
    // const response = await fetch("/api/login", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // if (response.ok) {
    //   router.push("/dashboard"); // Redirect ke halaman dashboard setelah login berhasil
    // } else {
    //   // Tampilkan pesan error atau tindakan lainnya
    // }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative">
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </button>
          </div>
          <div className="text-right mt-2">
            <a href="#" className="text-blue-500 hover:underline text-sm">
              Forgot Password
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-2 text-sm">
          <span>Don't have an account? </span>
          <a href="/register" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
