export function GhostButton({ children }) {
    return (
        <button className="bg-black text-white text-lg font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-800 transition-all duration-200">
            {children}
        </button>
    );
}