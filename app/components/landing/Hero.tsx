import Link from 'next/link'

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24">
            <div className="max-w-6xl mx-auto text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold">Smart Port Management Platform</h1>
                <p className="mt-6 text-lg">Efficient cargo tracking, vessel scheduling and logistics monitoring.</p>

                <div className="mt-8 flex justify-center gap-4">
                    <Link href="/login" className="bg-white text-blue-600 px-6 py-3 rounded font-semibold">
                        Get Started
                    </Link>
                </div>
            </div>
        </section>
    )
}