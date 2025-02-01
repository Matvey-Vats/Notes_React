import { useEffect, useState } from 'react'
import BurgerMenu from './components/BurgerMenu'
import Header from './components/Header'
import NoteBody from './components/NoteBody'
import SideBar from './components/SideBar'

function App() {
	const [isOpen, setIsOpen] = useState(false)
	const [notes, setNotes] = useState(() => {
		const savedNotes = localStorage.getItem('notes')
		return savedNotes ? JSON.parse(savedNotes) : []
	})
	const [noteBody, setNoteBody] = useState('')
	const [selectedNote, setSelectedNote] = useState(null)

	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes))
	}, [notes])

	function saveNote(note) {
		setNotes([...notes, { id: Date.now(), title: note.title, body: note.body }])
	}

	function deleteNote(id) {
		setNotes(notes.filter(note => note.id !== id))
		setNoteBody('')
	}

	function toggleEdit() {}

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className='flex w-full h-screen dark:bg-neutral-800 dark:text-white'>
			<SideBar
				isOpen={isOpen}
				notes={notes}
				setSelectedNote={setSelectedNote}
			/>
			<BurgerMenu toggleMenu={toggleMenu} />
			<main className='grow p-5 flex flex-col max-w-3xl m-auto rounded-[10px] border border-black dark:border-gray-400'>
				<Header
					saveNote={saveNote}
					deleteNote={deleteNote}
					toggleEdit={toggleEdit}
					noteBody={noteBody}
					selectedNote={selectedNote}
				/>
				<NoteBody setNoteBody={setNoteBody} selectedNote={selectedNote} />
			</main>
		</div>
	)
}

export default App
