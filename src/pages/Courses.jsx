import { useEffect, useState } from "react";
import CourseTable from "../components/CourseTable";
import CourseForm from "../forms/CourseForm";

const API_URL =
  "http://localhost:8080/api/v1/courses";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [editingCourse, setEditingCourse] =
    useState(null);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(
            "No se pudieron cargar los cursos"
          );
        }

        const data = await response.json();

        setCourses(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getCourses();
  }, []);

  const handleCreate = () => {
    setEditingCourse(null);
    setIsModalOpen(true);
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setEditingCourse(null);
    setIsModalOpen(false);
  };

  const handleSubmit = async (
    courseData
  ) => {
    try {
      const isEditing =
        Boolean(editingCourse);

      const url = isEditing
        ? `${API_URL}/${editingCourse.id}`
        : API_URL;

      const method = isEditing
        ? "PUT"
        : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(courseData),
      });

      if (!response.ok) {
        throw new Error(
          "Error al guardar el curso"
        );
      }

      const savedCourse =
        await response.json();

      if (isEditing) {
        setCourses((current) =>
          current.map((course) =>
            course.id === savedCourse.id
              ? savedCourse
              : course
          )
        );
      } else {
        setCourses((current) => [
          ...current,
          savedCourse,
        ]);
      }

      handleCancel();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = async (id) => {
    if (
      !window.confirm(
        "¿Deseas eliminar este curso?"
      )
    ) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(
          "No se pudo eliminar el curso"
        );
      }

      setCourses((current) =>
        current.filter(
          (course) => course.id !== id
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return (
      <p className="p-6">
        Cargando cursos...
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
            Cursos
          </h1>

          <p className="text-slate-500">
            Gestiona los cursos
            registrados.
          </p>
        </div>

        <button
          onClick={handleCreate}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          + Nuevo Curso
        </button>

      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <CourseTable
          courses={courses}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <CourseForm
        open={isModalOpen}
        initialData={editingCourse}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />

    </section>
  );
}

export default Courses;
