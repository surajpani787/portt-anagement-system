'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle } from 'lucide-react'
import { redirectByRole } from '../lib/userRole'

export default function LoginPage() {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('admin')
    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        if (!email || !password) {
            alert('Please enter email and password')
            return
        }

        setLoading(true)

        // Demo delay to show success icon
        setTimeout(() => {
            redirectByRole(role, router)
        }, 1000)
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white shadow p-8 rounded w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border p-2 rounded mb-3"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border p-2 rounded mb-4"
                />

                <select
                    className="w-full border p-2 rounded mb-4"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="worker">Worker</option>
                </select>

                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-600 text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-blue-700"
                >
                    {loading ? <CheckCircle size={18} /> : null}
                    {loading ? 'Login Successful' : 'Login'}
                </button>
            </div>
        </div>
    )
}