function StudentTable ({ students, onEdit, onDelete,}) {
    return (
      <table>
        <thead className="bg-slate-100">
          <tr>
            <th className="text-left p-4">Nombre</th>
            <th className="text-left p-4">Apellido</th>
            <th className="text-left p-4">Correo</th>
            <th className="text-left p-4">Celular</th>
            <th className="text-center p-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student.studentId}
              className="border-t"
            >
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
              
            </tr>
          ))}
        </tbody>
      </table>  
    )
}

export default StudentTable;