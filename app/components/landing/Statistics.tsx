export default function Statistics() {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
                <Stat number="500+" label="Ships Managed" />
                <Stat number="120K" label="Containers" />
                <Stat number="24/7" label="Monitoring" />
                <Stat number="99%" label="Efficiency" />
            </div>
        </section>
    )
}

function Stat({ number, label }: any) {
    return (
        <div>
            <p className="text-3xl font-bold text-blue-600">{number}</p>
            <p>{label}</p>
        </div>
    )
}