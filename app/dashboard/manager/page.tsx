import DashboardLayout from "@/app/components/dashboard/DashboardLayout";
import StatCard from "@/app/components/dashboard/StatCard";

export default function ManagerDashboard() {
    return (
        <DashboardLayout role="manager">

            <h2 className="text-2xl font-bold mb-6">
                Operations Summary
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Assigned Ships" value="42" />
                <StatCard title="Pending Tasks" value="16" />
                <StatCard title="Dock Utilization" value="87%" />
            </div>

        </DashboardLayout>
    )
}
