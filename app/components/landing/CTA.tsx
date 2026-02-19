import Link from 'next/link'

export default function CTA() {
    return (
        <section className="bg-blue-600 text-white py-20 text-center">
            <h2 className="text-3xl font-bold">Ready to manage your port efficiently?</h2>
            <div className="mt-6">
                <Link href="/signup" className="bg-white text-blue-600 px-6 py-3 rounded font-semibold">
                    Create Account
                </Link>
            </div>
        </section>
    )
}