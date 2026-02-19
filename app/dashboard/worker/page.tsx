import DashboardLayout from "@/app/components/dashboard/DashboardLayout";
import StatCard from "@/app/components/dashboard/StatCard";


export default function WorkerDashboard() {
    return (
        <DashboardLayout role="worker">

            <h2 className="text-2xl font-bold mb-6">
                My Work Status
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Today's Tasks" value="8" />
                <StatCard title="Completed" value="5" />
                <StatCard title="Shift Time" value="8 Hours" />
            </div>

        </DashboardLayout>
    )
}
