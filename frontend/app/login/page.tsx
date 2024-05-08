"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFetch } from "use-http";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { post, cache, response } = useFetch(`/auth/login`);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await post({
      user: { email: email, password: password },
      credentials: "include",
    });
    if (response.ok) {
      router.push("/");
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