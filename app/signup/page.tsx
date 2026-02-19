'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
    const router = useRouter()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('worker')
    const [loading, setLoading] = useState(false)

    const handleSignup = () => {
        if (!name || !email || !password || !role) {
            alert('Please fill all fields')
            return
        }

        setLoading(true)

        // Demo save (frontend only)
        const user = {
            name,
            email,
            password,
            role
        }

        localStorage.setItem('registeredUser', JSON.stringify(user))

        setTimeout(() => {
            alert('Account created successfully! Please login.')
            router.push('/login')
        }, 800)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">

                <h2 className="text-2xl font-bold text-center mb-6">
                    Create Account
                </h2>

                {/* Name */}
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                {/* Email */}
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* Password */}
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* Role */}
                <select
                    className="w-full border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="worker">Worker</option>
                </select>

                {/* Button */}
                <button
                    onClick={handleSignup}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition"
                >
                    {loading ? 'Creating Account...' : 'Create Account'}
                </button>

            </div>
        </div>
    )
}
