import SideBar from "@/components/SideBar";
import { OrgSideBar } from "@/components/Organization/OrgSideBar";
import NavBar from "@/components/NavBar";
interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <SideBar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSideBar />
          <div className="h-full flex-1"><NavBar/>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
