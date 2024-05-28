import DashboardNav from "../ui/dashboard-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-col overflow-hidden">
        <div className="w-full flex-none border-b-2 border-black">
            <DashboardNav />
        </div>
        <div className="flex-grow overflow-y-auto">{children}</div>
      </div>
    );
  }