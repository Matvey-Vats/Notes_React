import ToggleTheme from './ToggleTheme'

export default function SideBar({ isOpen }) {
	return (
		<>
			<aside
				className={`w-3xs bg-neutral-800 text-white p-5 flex flex-col transition-transform duration-300 ease-in-out dark:bg-white max-md:fixed max-md:top-0 max-md:left-0 max-md:h-full max-md:z-50 max-md:${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div className='flex items-center justify-between'>
					<h2 className='mb-5 text-2xl font-bold dark:text-black'>Notes</h2>
					<ToggleTheme />
				</div>
				<ul className='grow'>
					<li className='p-2.5 bg-white mb-1.5 rounded-2xl cursor-pointer text-black dark:bg-black dark:text-white'>
						First Note
					</li>
					<li className='p-2.5 bg-white mb-1.5 rounded-2xl cursor-pointer text-black dark:bg-black dark:text-white'>
						Second Note
					</li>
					<li className='p-2.5 bg-white mb-1.5 rounded-2xl cursor-pointer text-black dark:bg-black dark:text-white'>
						Third Note
					</li>
				</ul>
				<button className='bg-white text-black p-2.5 border-none rounded-2xl cursor-pointer'>
					+ Add Note
				</button>
			</aside>
		</>
	)
}
