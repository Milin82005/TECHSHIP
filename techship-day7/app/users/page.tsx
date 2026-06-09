async function getUsers() {

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response.json();
}

export default async function UsersPage() {

  const users = await getUsers();

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        API Users
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {users.map((user: any) => (

          <div
            key={user.id}
            className="bg-white border rounded-lg shadow-md p-4"
          >

            <h2 className="text-xl font-bold">
              {user.name}
            </h2>

            <p>Email: {user.email}</p>

            <p>
              Company: {user.company.name}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}