
function NavMenu() {
  return (
    <nav>
      <ul className="flex flex-col gap-4 ml-4 mt-8">
        <li><a className= "text-white hover:text-blue-500" href="/">Dashboard</a></li>
        <li><a className= "text-white hover:text-blue-500" href="/Courses">Cursos</a></li>
        <li><a className= "text-white hover:text-blue-500" href="/Enrollments">Matrículas</a></li>
        <li><a className= "text-white hover:text-blue-500" href="/Students">Estudiantes</a></li>
      </ul>
    </nav>
  );
}

export default NavMenu;