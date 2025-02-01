export default function NoteBody() {
	return (
		<>
			<textarea
				className='grow w-full p-2.5 border-solid border-1 border-gray-200 h-64 resize-y dark:border-none'
				placeholder='Write your Markdown here...'
			></textarea>
			<div className='mt-5 bg-white p-2.5 border-1 border-solid border-neutral-700 dark:bg-transparent'>
				<h3>Preview</h3>
				<div className='preview-content'></div>
			</div>
		</>
	)
}
