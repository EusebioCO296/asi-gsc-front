import { useFormState } from "react-dom";

function StudentForm({student, onSave}) {
  const {formData, handleChange} = useFormState(
    student ?? {firstName: "", lastName: "", email: "", phone: ""},
  );

  function handleSubmit(event) {
    event.preventDefault();
    onSave(formData);
  }

  async function handleCreate(event) {
    event.preventDefault();
    await createStudent(formData);
  }

  return (
    <div className = "flex justify-center items-center inset-0 z-50 bg-black/40">
      <div className = "bg-gray-300 rounded-xl w-full max-w-lg p-6">
        <h2 className="text-2xl font bold mb-6">Estudiantes</h2>
        <form className="space-y-4">
          <input
            type = "text"
            name = "firstName"
            placeholder = "Nombre"
            className="w-full border rounded-lg p-3"
            value = {formData.firstName}
            onChange = {handleChange}
          />
          <input
            type = "text"
            name = "lastName"
            placeholder = "Apellido"
          />
          <input
            type = "email"
            name = "email"
            placeholder = "Correo Electrónico"
          />
          <input
            type = "text"
            name = "phone"
            placeholder = "Teléfono"
          />
          <div className="flex justify-center gap-3 pt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              type = "submit">
              Crear estudiante
            </button>
            <button  className="bg-gray-500 text-white px-4 py-2 rounded-lg" 
              type = "button">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )

}

export default StudentForm;