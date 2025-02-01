export default function NoteButton({ note, onChange }) {
	return (
		<button
			onClick={() => onChange(note)}
			className='w-full p-2.5 bg-white mb-1.5 rounded-2xl cursor-pointer text-black dark:bg-black dark:text-white'
		>
			{note.title}
		</button>
	)
}
