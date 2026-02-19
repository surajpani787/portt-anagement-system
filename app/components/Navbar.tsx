'use client'

import Link from 'next/link'

export default function Navbar() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                <Link href="/" className="text-xl font-bold text-blue-600">
                    PortMS
                </Link>

                <div className="flex gap-4">
                    <Link href="/login" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                        Login
                    </Link>
                    <Link href="/signup" className="px-4 py-2 rounded border border-blue-600 text-blue-600 hover:bg-blue-50">
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    )
}