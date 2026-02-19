import { Ship, ShieldCheck, BarChart3 } from 'lucide-react'

export default function Features() {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
                <Feature icon={<Ship />} title="Vessel Tracking" />
                <Feature icon={<ShieldCheck />} title="Secure Operations" />
                <Feature icon={<BarChart3 />} title="Real-time Analytics" />
            </div>
        </section>
    )
}

function Feature({ icon, title }: any) {
    return (
        <div className="bg-white shadow rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4 text-blue-600">{icon}</div>
            <h3 className="font-semibold">{title}</h3>
        </div>
    )
}