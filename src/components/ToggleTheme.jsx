import { useState } from 'react'
import moon from '../assets/moon-solid.svg'
import sun from '../assets/sun-solid.svg'

export default function ToggleTheme() {
	const [isDarkMode, setIsDarkMode] = useState(false)

	// useEffect(() => {
	// 	const savedTheme = localStorage.getItem('theme')
	// 	if (savedTheme) {
	// 		setIsDarkMode(savedTheme === 'dark')
	// 	}
	// }, [])

	function toggleTheme() {
		setIsDarkMode(!isDarkMode)
		// const newTheme = !isDarkMode ? 'dark' : 'light'
		// localStorage.setItem('theme', newTheme)
		document.body.classList.toggle('dark')
	}

	// useEffect(() => {}, [isDarkMode])

	return (
		<>
			<button className='mb-5 cursor-pointer' onClick={toggleTheme}>
				<img
					className={isDarkMode ? '' : 'mb-2'}
					src={isDarkMode ? moon : sun}
					alt=''
					width='30'
					height='30'
				/>
			</button>
		</>
	)
}
