export default function StudentCard(props: any) {
  return (
    <div className="bg-white shadow-md border rounded-lg p-4">
      <h2 className="text-xl font-bold">{props.name}</h2>
      <p>Course: {props.course}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}