import { useEffect, useState } from 'react'

export default function Header({
	saveNote,
	deleteNote,
	toggleEdit,
	noteBody,
	// setBody,
	selectedNote,
	setNoteBody,
}) {
	const [text, setText] = useState('')

	useEffect(() => {
		if (selectedNote) {
			setText(selectedNote.title)
		}
	}, [selectedNote])

	function handleTitleInput(e) {
		setText(e.target.value)
	}

	function handleDelete() {
		if (selectedNote) {
			deleteNote(selectedNote.id)
			setText('')
			// setBody('')
			setNoteBody('')
		}
	}

	function handleSave() {
		if (text.trim() === '' && noteBody.trim() === '') return
		saveNote({ id: Date.now(), title: text, body: noteBody })
		setText('')
		// setBody('')
		setNoteBody('')
	}

	return (
		<header className='flex justify-between items-center mb-2.5 max-[420px]:flex-col max-[420px]:items-center'>
			<input
				type='text'
				value={text}
				onChange={handleTitleInput}
				className='grow text-xl p-1.25 border-b-2 border-b-black dark:border-b-gray-300 max-[420px]:mb-[20px]'
				placeholder='Note Title'
			/>
			<div className='max-[420px]:flex max-[420px]:flex-col max-[420px]:w-full max-[420px]:gap-y-[10px]'>
				<button
					onClick={handleSave}
					className='ml-2.5 py-1.25 px-2.5 border-none cursor-pointer bg-green-400 rounded-3xl text-white'
				>
					Save
				</button>
				<button
					onClick={() => toggleEdit()}
					className='ml-2.5 py-1.25 px-2.5 border-none cursor-pointer text-white bg-amber-500 rounded-3xl'
				>
					Edit
				</button>
				<button
					onClick={handleDelete}
					className='ml-2.5 py-1.25 px-2.5 border-none cursor-pointer text-white bg-red-500 rounded-3xl'
				>
					Delete
				</button>
			</div>
		</header>
	)
}
