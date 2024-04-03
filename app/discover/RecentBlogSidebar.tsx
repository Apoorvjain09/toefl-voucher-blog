'use client'
import Image from "next/image";
import pic from "../../public/assets/toefl-ets.webp"
// components/TableComponent.js
function RecentBlogsSidebar() {
    return (
        <aside className="z-10 w-full p-6 dark:bg-gray-50 dark:text-gray-800" style={{marginTop:100, position:"absolute"}}>
            <nav className="space-y-8 text-sm fixed">
                <div className="space-y-2">
                    <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">Getting Started</h2>
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="/discover/toefl-guide">TOEFL Guide</a>
                        <a rel="noopener noreferrer" href="/discover/toefl-exam">Preparing for TOEFL</a>
                        <a rel="noopener noreferrer" href="/discover/toefl-full-form">Explaining TOEFL</a>
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">Dashboard</h2>
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="/discover/toefl-exam-fee">Exam Fees</a>
                        <a rel="noopener noreferrer" href="/discover/toefl-login">TOEFL Login Steps</a>
                        <a rel="noopener noreferrer" href="/discover/toefl-ets">Navigating</a>
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">Pages</h2>
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="/discover/toefl-exam-pattern">Exam Pattern</a>
                        <a rel="noopener noreferrer" href="/discover/toefl-ets-login">ETS Login</a>
                        <a rel="noopener noreferrer" href="/">Vouchers</a>
                        <a rel="noopener noreferrer" href="/discover">Blog Topics</a>
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">Misc</h2>
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="/discover/toefl-ibt">Format and Tips</a>
                        <a rel="noopener noreferrer" href="/discover/toefl-vs-ielts">TOEFL vs IELTS</a>
                        <a rel="noopener noreferrer" href="/discover/toefl-guide">TOEFL Help</a>
                        <a rel="noopener noreferrer" href="/discover/toefl-exam">TOEFL Prep</a>
                    </div>
                </div>
            </nav>
            <style jsx>{`
                @media (max-width: 1000px) {
                    aside {
                        display: none;
                    }
                }
            `}</style>
        </aside>
    );
}

export default RecentBlogsSidebar;
