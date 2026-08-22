import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";


function Students() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <header>
        <Nav/>
        <Header title={"Estudiantes"} description={"Gestión de estudiantes registrados"} txtButton={"Nuevo estudiante"}/>
      </header>
      <main className="flex-1 p-4">
        <Sidebar/>
      </main>
      <footer className="mt-4"><Footer/></footer>  
    </div>
  );
}

export default Students;