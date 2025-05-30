import { Link } from 'react-router-dom'

function SubjectsPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center text-blue-900">
            <div className="px-40 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-[#101518] tracking-light text-[32px] font-bold leading-tight min-w-72">My Decks</p></div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4"></div>
                    <div className="flex flex-col gap-3 pb-3">
                        <Link to="/subjects/Math/decks" className="flex flex-col gap-3 pb-3">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAisUgM8lUnQFDnvNrYK1vrtWYcHxh5zwWAZXRWGJ52Qmwn-bwoXxERVKX2RAus-RF2Wno--HgUTp2RhAnLa9RwTJZ07I-SpSWxiBqwu4mCg3A53uAWf0_IZxaaVaXulhZ9jPus5VpHEcpSTnafwE8Xj2wqIoL7Q5F0LCXNsi7eWRV8Y2BkX2zGzckPDYld7b_g1PKH0_9Kt_DXxdevGnIQceFowyHz5v6HDiijQN_nFO_KuukMrx6PZiwYWEVfXOukeFUxvPQqy_g-')" }}
                            ></div>
                            <div>
                                <p className="text-[#101518] text-base font-medium leading-normal">Math 202</p>
                                <p className="text-[#5c748a] text-sm font-normal leading-normal">Mathematics</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SubjectsPage