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
	const [selectedNote, setSelectedNote] = useState(() => {
		const selectedNote = localStorage.getItem('selected_note')
		return notes && selectedNote ? JSON.parse(selectedNote) : null
	})

	const [isEditing, setIsEditing] = useState(true)

	useEffect(() => {
		localStorage.setItem('selected_note', JSON.stringify(selectedNote))
	}, [selectedNote])

	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes))
	}, [notes])

	function addNewNote() {
		const newNote = { id: Date.now(), title: '', body: '' }
		setNotes([...notes, newNote])
		setSelectedNote(newNote)
	}

	function saveNote(note) {
		if (selectedNote) {
			const updatesNotes = notes.map(n =>
				n.id === selectedNote.id
					? { ...n, title: note.title, body: note.body }
					: n
			)

			if (selectedNote.title === note.title && selectedNote.body === note.body)
				return

			setNotes(updatesNotes)
			setSelectedNote({ ...selectedNote, title: note.title, body: note.body })
		} else {
			setNotes([
				...notes,
				{ id: Date.now(), title: note.title, body: note.body },
			])
			setSelectedNote({ id: Date.now(), title: note.title, body: note.body })
		}
	}

	function deleteNote(id) {
		const updatedNotes = notes.filter(note => note.id !== id)
		setNotes(updatedNotes)

		if (selectedNote && selectedNote.id === id) {
			setSelectedNote(null)
			localStorage.removeItem('selected_note')
		}
	}

	function toggleEdit() {
		setIsEditing(prev => !prev)
	}

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className='flex w-full h-screen dark:bg-neutral-800 dark:text-white max-md:px-3.5'>
			<SideBar
				isOpen={isOpen}
				notes={notes}
				setSelectedNote={setSelectedNote}
				addNewNote={addNewNote}
			/>
			<BurgerMenu toggleMenu={toggleMenu} />
			<main className='grow p-5 flex flex-col max-w-3xl m-auto rounded-[10px] border border-black dark:border-gray-400'>
				<Header
					saveNote={saveNote}
					deleteNote={deleteNote}
					toggleEdit={toggleEdit}
					noteBody={noteBody}
					// setBody={setBody}
					selectedNote={selectedNote}
					setSelectedNote={setSelectedNote}
					setNoteBody={setNoteBody}
				/>
				<NoteBody
					// body={body}
					// setBody={setBody}
					noteBody={noteBody}
					setNoteBody={setNoteBody}
					selectedNote={selectedNote}
					isEditing={isEditing}
					setIsEditing={setIsEditing}
				/>
			</main>
		</div>
	)
}

export default App
