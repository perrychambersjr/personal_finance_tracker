import Sidebar from "@/app/components/Sidebar"
import Topbar from "../components/topbar/Topbar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Topbar />
            
            <main className="flex-1 p-6 overflow-auto">
                {children}
            </main>
        </div>
    </div>
  )
}

export default DashboardLayout