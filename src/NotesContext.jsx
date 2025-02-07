import React from 'react'

const NotesContext = React.createContext()

export const NotesProvider = ({ children }) => {
	const [isOpen, setIsOpen] = React.useState(false)
	const [notes, setNotes] = React.useState(() => {
		const savedNotes = localStorage.getItem('notes')
		return savedNotes ? JSON.parse(savedNotes) : []
	})
	const [noteBody, setNoteBody] = React.useState('')
	const [selectedNote, setSelectedNote] = React.useState(() => {
		const selectedNote = localStorage.getItem('selected_note')
		return notes && selectedNote ? JSON.parse(selectedNote) : null
	})

	const [isEditing, setIsEditing] = React.useState(true)

	React.useEffect(() => {
		localStorage.setItem('selected_note', JSON.stringify(selectedNote))
	}, [selectedNote])

	React.useEffect(() => {
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
		<NotesContext.Provider
			value={{
				isOpen,
				notes,
				noteBody,
				selectedNote,
				isEditing,
				setNotes,
				setNoteBody,
				setSelectedNote,
				setIsEditing,
				addNewNote,
				saveNote,
				deleteNote,
				toggleEdit,
				toggleMenu,
			}}
		>
			{children}
		</NotesContext.Provider>
	)
}

export const useNotes = () => React.useContext(NotesContext)
