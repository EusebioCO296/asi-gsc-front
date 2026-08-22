
import Aside from "../components/Aside";
import NavMenu from "../components/NavMenu";

function MainLayout () {
  return (
    <div className="main-layout flex min-h-screen">
      <aside className="sidebar w-86 p-4 bg-blue-950 text-white">
        <Aside/>
        <NavMenu/>
        <p className="flex flex-1"><strong>ADMIN</strong></p>
        <p>ecaballero@cesde.net</p>
      </aside>  
      <div className=" flex flex-col flex-1 min-h-screen bg-slate-100 boder-18 border-blue-950">
        
      </div>
    </div>
  );
}   

export default MainLayout;