"use client";

import { useEffect, useState } from "react";

export default function SearchUsers() {

  const [users, setUsers] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        User Search
      </h1>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white border rounded-lg shadow-md p-4"
          >
            <h2 className="text-xl font-bold">
              {user.name}
            </h2>

            <p>{user.email}</p>

            <p>
              Company: {user.company.name}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}