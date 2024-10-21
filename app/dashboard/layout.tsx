import SideBar from "@/components/Organization/SideBar";
import { OrgSideBar } from "@/components/Organization/OrgSideBar";
import NavBar from "@/components/NavBar";
interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <SideBar />
      <div className="flex pl-16">
        <OrgSideBar />
        <div className="w-full">
          <NavBar />
          {children}
        </div>
      </div>
    </main>
  );
};

{
  /* <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSideBar />
          <div className="h-full flex-1"><NavBar/>{children}</div>
        </div>
      </div> */
}

export default DashboardLayout;
