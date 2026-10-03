import { NavLink } from "react-router-dom";

function Sidebar() {
  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Students", path: "/students" },
    { label: "Courses", path: "/courses" },
    { label: "Enrollments", path: "/enrollments" },
  ];

  return (
    <div className="h-screen w-64 bg-slate-900 flex flex-col justify-between">
      <div>
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-white text-xl font-bold">
            Course Management System
          </h1>
        </div>

        <ul className="mt-4 px-3 space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? "bg-slate-800 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 border-t border-slate-800">
        <p className="text-white font-medium">Admin User</p>
        <p className="text-slate-400 text-sm">admin@cms.com</p>
      </div>
    </div>
  );
}

export default Sidebar;