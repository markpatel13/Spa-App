import { Outlet } from "react-router-dom";
import AdminNavbar from "./adminNavbar";
import AdminFooter from "./AdminFooter";

const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminNavbar />
      <main className="flex-grow p-6 bg-gray-100">
        <Outlet /> {/* Dashboard / Users / Bookings will load here */}
      </main>
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;
