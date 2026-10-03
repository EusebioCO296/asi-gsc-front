import { useEffect, useState } from "react";
import StudentTable from "../components/StudentTable";
import EstudianteForm from "../forms/EstudianteForm";

const API_URL = "http://localhost:8080/api/v1/students";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("No se pudieron cargar los estudiantes");
        }

        const data = await response.json();
        setStudents(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getStudents();
  }, []);

  const handleCreate = () => {
    setEditingStudent(null);
    setIsModalOpen(true);
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingStudent(null);
  };

  const handleSubmit = async (studentData) => {
    try {
      const isEditing = Boolean(editingStudent);

      const url = isEditing
        ? `${API_URL}/${studentData.studentId}`
        : API_URL;

      const method = isEditing ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });

      if (!response.ok) {
        throw new Error(
          isEditing
            ? "No se pudo actualizar el estudiante"
            : "No se pudo crear el estudiante"
        );
      }

      const savedStudent = await response.json();

      if (isEditing) {
        setStudents((currentStudents) =>
          currentStudents.map((student) =>
            student.studentId === savedStudent.studentId
              ? savedStudent
              : student
          )
        );
      } else {
        setStudents((currentStudents) => [
          ...currentStudents,
          savedStudent,
        ]);
      }

      handleCancel();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = async (studentId) => {
    const confirmed = window.confirm(
      "¿Deseas eliminar este estudiante?"
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/${studentId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(
          "No se pudo eliminar el estudiante"
        );
      }

      setStudents((currentStudents) =>
        currentStudents.filter(
          (student) => student.studentId !== studentId
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return (
      <p className="p-6">
        Cargando estudiantes...
      </p>
    );
  }

  if (error) {
    return (
      <p className="p-6 text-red-600">
        {error}
      </p>
    );
  }

  return (
    <section className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Estudiantes
          </h1>

          <p className="text-slate-500">
            Gestiona los estudiantes registrados.
          </p>
        </div>

        <button
          type="button"
          onClick={handleCreate}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          + Nuevo estudiante
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <StudentTable
          students={students}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <EstudianteForm
        open={isModalOpen}
        initialData={editingStudent}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </section>
  );
}

export default Students;