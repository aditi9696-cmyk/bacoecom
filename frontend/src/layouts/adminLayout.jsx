import { Outlet } from 'react-router-dom';
import SideBar from '../utils/admin/sidebarNavigation';


export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-lime-50 to-yellow-50">
      {/* Sidebar */}
      <SideBar />

      {/* Right Content Area */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}
