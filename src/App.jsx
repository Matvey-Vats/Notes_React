import { useState } from 'react'
import BurgerMenu from './components/BurgerMenu'
import Header from './components/Header'
import NoteBody from './components/NoteBody'
import SideBar from './components/SideBar'

function App() {
	const [isOpen, setIsOpen] = useState(false)

	function saveNote() {}

	function deleteNote() {}

	function toggleEdit() {}

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className='flex w-full h-screen dark:bg-neutral-800 dark:text-white'>
			<SideBar isOpen={isOpen} />
			<BurgerMenu toggleMenu={toggleMenu} />
			<main className='grow p-5 flex flex-col max-w-3xl m-auto'>
				<Header
					saveNote={saveNote}
					deleteNote={deleteNote}
					toggleEdit={toggleEdit}
				/>
				<NoteBody />
			</main>
		</div>
	)
}

export default App
