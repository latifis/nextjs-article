import { useState } from "react";
import { useRouter } from "next/router";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Periksa kesesuaian password saat pengguna mengetik di bidang konfirmasi password
    if (name === "confirmPassword") {
      if (formData.password !== value) {
        setPasswordMatchError("Passwords do not match!");
      } else {
        setPasswordMatchError("");
      }
    }
  };

  const togglePasswordVisibility = (type) => {
    if (type === "password") {
      setShowPassword(!showPassword);
    } else if (type === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validasi untuk memeriksa apakah kata sandi cocok dengan konfirmasi kata sandi
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError("Passwords do not match!");
      return;
    }

    // Lakukan validasi formulir atau kirim data pendaftaran ke server jika diperlukan
    // Contoh penanganan pendaftaran:
    // const response = await fetch("/api/register", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // if (response.ok) {
    //   router.push("/dashboard"); // Redirect ke halaman dashboard setelah pendaftaran berhasil
    // } else {
    //   // Tampilkan pesan error atau tindakan lainnya
    // }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Signup</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              onClick={() => togglePasswordVisibility("password")}
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </button>
          </div>
          <div className="relative">
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              onClick={() => togglePasswordVisibility("confirmPassword")}
            >
              {showConfirmPassword ? <HiEyeOff /> : <HiEye />}
            </button>
          </div>
          {passwordMatchError && (
            <p className="text-red-500 text-sm">{passwordMatchError}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Signup
          </button>
        </form>
        <div className="text-center mt-2 text-sm">
          <span>Already have an account? </span>
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
