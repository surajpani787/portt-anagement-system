'use client'

import Link from 'next/link'
import { Ship, Users, BarChart3, Settings } from 'lucide-react'

export default function DashboardLayout({
    role,
    children,
}: {
    role: string
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex bg-slate-100">

            {/* SIDEBAR */}
            <aside className="w-64 bg-white shadow-lg hidden md:block">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-bold text-blue-600">
                        PortMS
                    </h2>
                    <p className="text-sm text-gray-500 capitalize">{role} Panel</p>
                </div>

                <nav className="p-4 space-y-2">
                    <SidebarItem icon={<Ship size={18} />} label="Vessels" />
                    <SidebarItem icon={<Users size={18} />} label="Crew" />
                    <SidebarItem icon={<BarChart3 size={18} />} label="Analytics" />
                    <SidebarItem icon={<Settings size={18} />} label="Settings" />
                </nav>
            </aside>

            {/* MAIN AREA */}
            <div className="flex-1 flex flex-col">

                {/* TOP HEADER */}
                <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-semibold capitalize">
                        {role} Dashboard
                    </h1>

                    <Link
                        href="/"
                        className="text-sm bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                    >
                        Logout
                    </Link>
                </header>

                {/* PAGE CONTENT */}
                <main className="p-6">{children}</main>
            </div>
        </div>
    )
}

function SidebarItem({ icon, label }: any) {
    return (
        <div className="flex items-center gap-3 p-3 rounded hover:bg-blue-50 cursor-pointer">
            <span className="text-blue-600">{icon}</span>
            <span className="text-sm font-medium">{label}</span>
        </div>
    )
}
