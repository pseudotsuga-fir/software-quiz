"use client";

import { useState } from "react";
import { useFetch } from "use-http";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { post, cache, response } = useFetch(
    `http://localhost:3008/auth/login`
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await post({ user: { email: email, password: password } });
    if (response.ok) {
      const authHeaders = response.headers.get("Authorization");
      if (authHeaders) {
        localStorage.setItem("session", authHeaders);
      }
    } else {
      console.log("Error", response);
    }
    cache.clear();
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        name="email"
        onChange={(e) => {
          setEmail(e.currentTarget.value);
        }}
      />
      <input
        type="password"
        name="password"
        onChange={(e) => {
          setPassword(e.currentTarget.value);
        }}
      />
      <button type="submit">Login</button>
    </form>
  );
}
