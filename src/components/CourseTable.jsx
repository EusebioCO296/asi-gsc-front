function CourseTable({
    courses,
    onEdit,
    onDelete,
  }) {
    if (courses.length === 0) {
      return (
        <p className="p-6 text-center text-slate-500">
          No hay cursos registrados.
        </p>
      );
    }
  
    return (
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-4">ID</th> 
              <th className="text-left p-4">Código</th>
              <th className="text-left p-4">Nombre</th>
              <th className="text-left p-4">Descripción</th>
              <th className="text-left p-4">
                Capacidad máxima
              </th>
              <th className="text-center p-4">
                Acciones
              </th>
            </tr>
          </thead>
  
          <tbody>
            {courses.map((course) => (
              <tr
                key={course.id}
                className="border-t hover:bg-slate-50"
              >
                <td className="p-4">
                  {course.id}
                </td>

                <td className="p-4">
                  {course.code}
                </td>
  
                <td className="p-4">
                  {course.name}
                </td>
  
                <td className="p-4">
                  {course.description}
                </td>
  
                <td className="p-4">
                  {course.maxCapacity}
                </td>
  
                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => onEdit(course)}
                      className="px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Editar
                    </button>
  
                    <button
                      type="button"
                      onClick={() => onDelete(course.id)}
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
  
  export default CourseTable;