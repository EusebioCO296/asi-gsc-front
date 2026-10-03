import { useEffect, useState } from "react";

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  birthDate: "",
};

function EstudianteForm({
  open,
  initialData,
  onSubmit,
  onCancel,
}) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setForm({
        firstName: initialData?.firstName ?? "",
        lastName: initialData?.lastName ?? "",
        email: initialData?.email ?? "",
        birthDate: initialData?.birthDate ?? "",
    });
  }, [initialData, open]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const isEditing = Boolean(initialData);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-xl font-bold text-slate-800 mb-4">
          {isEditing
            ? "Editar Estudiante"
            : "Agregar Estudiante"}
        </h2>

        <div className="space-y-4">

          <div>
            <label className="block text-sm text-slate-600 mb-1">
              Nombre
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-600 mb-1">
              Apellido
            </label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-600 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-600 mb-1">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              name="birthDate"
              value={form.birthDate}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            />
          </div>

        </div>

        <div className="flex justify-end gap-2 mt-6">

          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-100"
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            {isEditing ? "Actualizar" : "Guardar"}
          </button>

        </div>

      </form>
    </div>
  );
}

export default EstudianteForm;