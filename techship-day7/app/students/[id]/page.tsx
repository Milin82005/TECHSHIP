export default async function StudentDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const students = {
    "101": {
      name: "Milin",
      course: "BTech",
      email: "milin@gmail.com",
      skills: "Java, Python"
    },

    "102": {
      name: "Jeeva",
      course: "BSc",
      email: "jeeva@gmail.com",
      skills: "C++, Java"
    },

    "103": {
      name: "Kelna",
      course: "MCA",
      email: "kelna@gmail.com",
      skills: "React, Node.js"
    }
  };

  const student =
    students[id as keyof typeof students];

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-4">
        Student Details
      </h1>

      <p>Name: {student?.name}</p>
      <p>Course: {student?.course}</p>
      <p>Email: {student?.email}</p>
      <p>Skills: {student?.skills}</p>

    </div>
  );
}