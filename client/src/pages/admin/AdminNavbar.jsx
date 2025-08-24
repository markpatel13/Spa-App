import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-lg font-bold">Admin Panel</h1>
      <div className="space-x-4">
        <Link to="/admin/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/admin/users" className="hover:underline">Users</Link>
        <Link to="/admin/bookings" className="hover:underline">Bookings</Link>
        <Link to="/" className="bg-pink-500 px-3 py-1 rounded hover:bg-pink-600">
          Go Back Home
        </Link>
      </div>
    </nav>
  );
};

export default AdminNavbar;
