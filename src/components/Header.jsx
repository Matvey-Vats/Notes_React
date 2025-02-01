export default function Header() {
	return (
		<>
			<header className='flex justify-between items-center mb-2.5 max-[420px]:flex-col max-[420px]:items-center'>
				<input
					type='text'
					className='grow text-xl p-1.25 border-b-2 border-b-black dark:border-b-gray-300 max-[420px]:mb-[20px]'
					placeholder='Note Title'
				/>
				<div className='max-[420px]:flex max-[420px]:flex-col max-[420px]:w-full max-[420px]:gap-y-[10px]'>
					<button className='ml-2.5 py-1.25 px-2.5 border-none cursor-pointer bg-green-400 rounded-3xl text-white'>
						Save
					</button>
					<button className='ml-2.5 py-1.25 px-2.5 border-none cursor-pointer text-white bg-red-500 rounded-3xl'>
						Delete
					</button>
				</div>
			</header>
		</>
	)
}
