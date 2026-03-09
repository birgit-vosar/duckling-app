export default function Signup() {
    return (
        <div className="bg-[#0b111e] flex flex-col items-center justify-center min-h-screen  ">
            <div className="bg-[#0e1525] p-6 border border-[#182543] rounded-lg w-full max-w-md">
                <div>
                    <h2 className="mb-6 text-center font-semibold text-2xl/9 tracking-tight">🦆 WorkFlow Companion</h2>
                </div>
                <div>
                    <form action="/api/auth/signup" method="POST" className="space-y-6">
                        <div>
                            <label>
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="bg-[#0b111e] w-full outline-1 -outline-offset-1 outline-[#182543] placeholder:text-muted-foreground
                                    px-3 py-1.5
                                    rounded-md 
                                    sm:text-sm/6
                                    "
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label>
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="bg-[#0b111e] w-full outline-1 -outline-offset-1 outline-[#182543] placeholder:text-muted-foreground
                                    px-3 py-1.5
                                    rounded-md
                                    sm:text-sm/6
                                    "
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                        <div>
                            <button className="items-center justify-center rounded-md text-sm font-medium bg-blue-500 h-10 w-full">
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}