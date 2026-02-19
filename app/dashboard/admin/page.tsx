import DashboardLayout from "@/app/components/dashboard/DashboardLayout";
import StatCard from "@/app/components/dashboard/StatCard";

export default function AdminDashboard() {
    return (
        <DashboardLayout role="admin">

            <h2 className="text-2xl font-bold mb-6">
                System Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Total Ships" value="520" />
                <StatCard title="Active Workers" value="1,240" />
                <StatCard title="Daily Cargo" value="18,500 Tons" />
            </div>

        </DashboardLayout>
    )
}
