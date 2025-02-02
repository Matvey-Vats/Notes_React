import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import '../styles/markdown_text.css'

export default function NoteBody({
	noteBody,
	setNoteBody,
	selectedNote,
	isEditing,
	setIsEditing,
}) {
	useEffect(() => {
		if (selectedNote) {
			setNoteBody(selectedNote.body)
			setIsEditing(false)
		}
	}, [selectedNote])

	function handleMarkdownText(e) {
		setNoteBody(e.target.value)
	}

	return (
		<>
			<div className='flex flex-col w-full'>
				{isEditing && (
					<textarea
						value={noteBody}
						onChange={handleMarkdownText}
						className='grow w-full p-2.5 border-solid border-1 border-gray-200 h-64 resize-y dark:border-none'
						placeholder='Write your Markdown here...'
					/>
				)}

				<div className='mt-4 p-4 border-t border-gray-200 max-w-full'>
					<ReactMarkdown
						className='markdown_text prose dark:prose-invert'
						remarkPlugins={remarkGfm}
					>
						{noteBody}
					</ReactMarkdown>
				</div>
			</div>
		</>
	)
}
