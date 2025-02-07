import React from 'react'
import BurgerMenu from './components/BurgerMenu'
import Header from './components/Header'
import NoteBody from './components/NoteBody'
import SideBar from './components/SideBar'
import { NotesProvider } from './NotesContext'

function App() {
	return (
		<NotesProvider>
			<div className='flex w-full h-screen dark:bg-neutral-800 dark:text-white max-md:px-3.5'>
				<SideBar />
				<BurgerMenu />
				<main className='grow p-5 flex flex-col max-w-3xl m-auto rounded-[10px] border border-black dark:border-gray-400'>
					<Header />
					<NoteBody />
				</main>
			</div>
		</NotesProvider>
	)
}

export default App
