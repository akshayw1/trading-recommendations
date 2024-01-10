"use client";
import Button1 from "../buttons/button1";
import styles from "./styles.module.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = [];

    if (email === "") {
      newErrors.push("email required");
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.push("email invalid");
    }

    if (password === "") {
      newErrors.push("pass required");
    }

    for (let i = 0; i < newErrors.length; i++) {
      toast.warning(newErrors[i]);
    }

    setErrors((arr) => [...newErrors]);

    if (newErrors.length > 0) {
      return;
    }

    const res = await signIn("credentials", {
      password,
      email,
      redirect: false,
      callbackUrl: `${window.location.origin}`,
    });
    if (res.ok) {
      toast.success("Logged");
      router.push("/home");
    } else {
      toast.warning(res.error);
    }
  };
  return (
    <>
      <ToastContainer />
      <main className={styles.main}>
        <h2 className={styles.h2}>
          Sign in to <span className="blue">BTCUSDPERP</span>
        </h2>
        <div className="input1">
          <input
            onBlur={() => setErrors([])}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value.replace(" ", ""));
              setErrors([]);
            }}
            type="text"
            required
          ></input>
          <label>Email</label>
        </div>
        <div className="input1">
          <input
            onBlur={() => setErrors([])}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value.replace(" ", ""));
              setErrors([]);
            }}
            type="password"
            required
          ></input>
          <label style={{ "--color1": "rgb(30,49,93)" }}>Password</label>
        </div>
        <Button1
          onClick={handleSubmit}
          style1={{ "--blue1": "rgb(27,42,80)" }}
          style2={{
            fontWeight: 600,
            fontSize: "1.5rem",
            height: 46,
            paddingRight: 48,
            paddingLeft: 48,
          }}
        >
          Log in
        </Button1>
        <div className={styles.authOptions}>
          <p className="blue">Reset Password</p>
          <p>
            No Account? <span className="blue">Create One</span>
          </p>
        </div>
      </main>
    </>
  );
}
