import { useEffect, useState } from 'react'
import moon from '../assets/moon-solid.svg'
import sun from '../assets/sun-solid.svg'

export default function ToggleTheme() {
	const [isDarkMode, setIsDarkMode] = useState(
		() => localStorage.getItem('theme') === 'dark'
	)

	useEffect(() => {
		if (isDarkMode) {
			document.body.classList.add('dark')
		} else {
			document.body.classList.remove('dark')
		}

		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
	}, [isDarkMode])

	function toggleTheme() {
		setIsDarkMode(prev => !prev)
	}

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
