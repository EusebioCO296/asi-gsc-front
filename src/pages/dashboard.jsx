import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";


function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Sidebar />
      <StatCard title="Students" total="50" />
      <StatCard title="Courses" total="10" />
      <StatCard title="Enrollments" total="145" />
    </div>
  );
}

export default Dashboard;