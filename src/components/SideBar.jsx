import NoteButton from './NoteButton'
import ToggleTheme from './ToggleTheme'

export default function SideBar({ isOpen, notes, setSelectedNote }) {
	return (
		<>
			<aside
				className={`w-3xs bg-neutral-800 text-white p-5 flex flex-col transition-transform duration-300 ease-in-out dark:bg-white max-md:fixed max-md:top-0 max-md:left-0 max-md:h-full max-md:z-50 ${
					isOpen ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'
				}`}
			>
				<div className='flex items-center justify-between'>
					<h2 className='mb-5 text-2xl font-bold dark:text-black'>Notes</h2>
					<ToggleTheme />
				</div>
				<ul className='grow'>
					{notes.length > 0 ? (
						notes.map(note => (
							<NoteButton
								key={note.id}
								note={note}
								onChange={setSelectedNote}
							/>
						))
					) : (
						<p className='dark:text-black'>List is empty</p>
					)}
				</ul>
				<button className='bg-white text-black p-2.5 border-none rounded-2xl cursor-pointer'>
					+ Add Note
				</button>
			</aside>
		</>
	)
}
