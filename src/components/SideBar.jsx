import { useNotes } from '../NotesContext'
import NoteButton from './NoteButton'
import ToggleTheme from './ToggleTheme'

export default function SideBar() {
	const { isOpen, notes, setSelectedNote, addNewNote } = useNotes()
	return (
		<>
			<aside
				className={`w-3xs bg-neutral-800 text-white p-5 flex flex-col transition-transform duration-300 ease-in-out overflow-scroll dark:bg-white max-md:fixed max-md:top-0 max-md:left-0 max-md:h-full max-md:z-50 ${
					isOpen ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'
				}`}
			>
				<div className='flex items-center justify-between'>
					<h2 className='mb-5 text-2xl font-bold dark:text-black'>Notes</h2>
					<ToggleTheme />
				</div>
				<ul className='grow mb-5'>
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
				<button
					onClick={addNewNote}
					className='bg-white text-black p-2.5 border-none rounded-2xl cursor-pointer'
				>
					+ Add Note
				</button>
			</aside>
		</>
	)
}
