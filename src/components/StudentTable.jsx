function StudentTable({
  students,
  onEdit,
  onDelete,
}) {
  if (students.length === 0) {
    return (
      <p className="p-6 text-center text-slate-500">
        No hay estudiantes registrados.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="text-left p-4">
              ID
            </th>

            <th className="text-left p-4">
              Nombre
            </th>

            <th className="text-left p-4">
              Apellido
            </th>

            <th className="text-left p-4">
              Correo
            </th>

            <th className="text-left p-4">
              Fecha de nacimiento
            </th>

            <th className="text-center p-4">
              Acciones
            </th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="border-t hover:bg-slate-50"
            >
              <td className="p-4">
                {student.id}
              </td>

              <td className="p-4">
                {student.firstName}
              </td>

              <td className="p-4">
                {student.lastName}
              </td>

              <td className="p-4">
                {student.email}
              </td>

              <td className="p-4">
                {student.birthDate}
              </td>

              <td className="p-4">
                <div className="flex justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => onEdit(student)}
                    className="px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Editar
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      onDelete(student.studentId)
                    }
                    className="px-3 py-1.5 rounded-md bg-red-600 text-white hover:bg-red-700"
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;