import { useNotes } from '../NotesContext'

export default function BurgerMenu() {
	const { toggleMenu } = useNotes()

	return (
		<div className='hidden absolute right-[3%] top-[3%] max-md:block'>
			<button
				className='flex w-12 h-8 cursor-pointer relative items-center justify-end z-50 '
				onClick={toggleMenu}
			>
				<span className='w-[80%] h-0.5 transform scale-100 bg-black transition duration-300 ease-in dark:bg-white'></span>
				<span className='absolute w-full h-0.5 bg-black top-0 dark:bg-white'></span>
				<span className='absolute w-full h-0.5 bg-black bottom-0 dark:bg-white'></span>
			</button>
		</div>
	)
}
