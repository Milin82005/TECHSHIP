export default function Dashboard() {
  return (
    <div className="p-8 min-h-screen bg-gray-100">

      <h1 className="text-4xl font-bold text-center mb-8">
        Student Management Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">
            Total Students
          </h2>

          <p className="text-4xl mt-4">
            3
          </p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">
            Total Courses
          </h2>

          <p className="text-4xl mt-4">
            3
          </p>
        </div>

        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">
            Active Students
          </h2>

          <p className="text-4xl mt-4">
            3
          </p>
        </div>

           </div>

      <div className="mt-8 flex gap-4">

        <a
  href="/students"
  className="bg-blue-600 text-white px-4 py-2 rounded"
>
  View Students
</a>

        <a
  href="/users"
  className="bg-green-600 text-white px-4 py-2 rounded"
>
  View Users
</a>

      </div>

    </div>
  );
}