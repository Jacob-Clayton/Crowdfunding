export default function Tooltip({ message, children }) {
    return (
    <div className="group relative">
        {children}
        <span className={`z-30 absolute top-8 -left-8 scale-0 transition-all duration-300 rounded font-regular bg-primary-black bg-opacity-[40%] py-1 px-2 text-off-white group-hover:scale-100 lg:block w-[150px] hidden text-center`}>{message}</span>
    </div>
    )
}