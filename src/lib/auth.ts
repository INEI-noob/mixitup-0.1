// src/lib/auth.ts

export async function signUp(data: { email: string; password: string }) {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    if (!res.ok) {
      throw new Error("Failed to register");
    }
  
    return res.json(); // Return user data or success response
  }
  