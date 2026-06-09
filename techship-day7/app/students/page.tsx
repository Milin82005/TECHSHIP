import StudentCard from "../../components/StudentCard";

export default function StudentsPage() {

  const students = [
    {
      id: 101,
      name: "Milin",
      course: "BTech",
      email: "milin@gmail.com"
    },
    {
      id: 102,
      name: "Jeeva",
      course: "BSc",
      email: "jeeva@gmail.com"
    },
    {
      id: 103,
      name: "Kelna",
      course: "MCA",
      email: "kelna@gmail.com"
    }
  ];

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Student Listing
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            email={student.email}
          />
        ))}

      </div>

    </div>
  );
}