import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
    <div className="Dashboard">  
      <header><h1>Dashboard</h1></header>
      <Sidebar />
      <StatCard title="Students" total="50" />
      <StatCard title="Courses" total="10" />
      <StatCard title="Enrollments" total="145" />
      <footer>
        <Footer />
      </footer>
    </div>
    </>
  );
}

export default Dashboard;