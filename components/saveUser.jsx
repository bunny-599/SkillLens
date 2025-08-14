// components/SaveUser.jsx
"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function SaveUser() {
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn && user) {
      fetch("/api/saveuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
    }
  }, [isSignedIn, user]);
  
  return null;
}
