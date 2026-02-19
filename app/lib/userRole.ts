export function redirectByRole(role: string, router: any) {
    if (typeof window !== 'undefined') {
        localStorage.setItem('role', role)
    }

    if (role === 'admin') router.push('/dashboard/admin')
    if (role === 'manager') router.push('/dashboard/manager')
    if (role === 'worker') router.push('/dashboard/worker')
}
