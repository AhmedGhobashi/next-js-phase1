import AdminSidebar from "./AdminSidebar"

interface IAdminLaoutProps {
    children: React.ReactNode;
}


const AdminLayout = ({children}: IAdminLaoutProps) => {



  return (
     <div className="flex min-h-screen bg-slate-50">
      <AdminSidebar/>
            <main className="flex-1 md:ml-64 p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          {/* Icon Toggle Sidebar */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Dashboard</h2>
              <p className="text-slate-600 mt-2">Welcome to your admin panel</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">{children}</div>
        </div>
      </main>
    </div>
  )
}

export default AdminLayout
