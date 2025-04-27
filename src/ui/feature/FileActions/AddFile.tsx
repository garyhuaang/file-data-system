function AddFiles() {
	return (
		<div className="mb-4">
			<h2 className="text-lg font-bold mb-2">Add New File</h2>
			<div className="space-y-2">
				<input placeholder="File name*" className="w-full p-2 border rounded" />
				<input placeholder="Path*" className="w-full p-2 border rounded" />
				<input
					placeholder="Size (bytes)"
					className="w-full p-2 border rounded"
				/>
				<input placeholder="MIME type" className="w-full p-2 border rounded" />
				<input placeholder="Owner*" className="w-full p-2 border rounded" />
				<input
					placeholder="Tags (comma separated)"
					className="w-full p-2 border rounded"
				/>
				<button
					type="submit"
					className="bg-green-500 text-white px-4 py-2 rounded w-full"
				>
					Add File
				</button>
			</div>
		</div>
	)
}

export default AddFiles
