export default function StatCard({
    title,
    value,
}: {
    title: string
    value: string
}) {
    return (
        <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-500 text-sm">{title}</p>
            <p className="text-2xl font-bold mt-2 text-blue-600">{value}</p>
        </div>
    )
}
