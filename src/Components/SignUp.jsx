import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [phone,setPhone]=("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const collectData = async () => {
    console.warn(name, password, email);
    let result = await fetch("http://localhost:5001/registerUser", {
      method: "POST",
      body: JSON.stringify({ name, phone,email,password}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">REGISTER</h1>
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
        />
         <input
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter Your Phone Number"
        />
       
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
        />
         <input
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
        />

        <button
          onClick={collectData}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
