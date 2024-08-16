'use client'
import { useEffect, useState } from "react";

// Define the type for the user object
interface User {
  name: string;
  family_name?: string; // Add this property if you are getting family_name from API
  // Add other properties if needed
}

export default function UserData() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("/api/auth/user")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center ">
      {user ? (
        <p className="text-3xl font-bold text-fuchsia-700 py-4">
          Welcome, <span className="text-teal-600">{user.family_name || user.name}</span>!
        </p>
      ) : (
        <p className="text-gray-500"></p>
      )}
    </div>
  );
}
