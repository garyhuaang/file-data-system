import AddFiles from "../FileActions/AddFile"
import SearchFiles from "../FileActions/SearchFile"
import FileList from "../FileList"
import SelectedFile from "../SelectedFile/SelectedFile"

const FilesMain = () => {
	return (
		<div className="flex flex-col h-screen bg-gray-100">
			<h1 className="bg-primary  shadow-md text-2xl font-bold text-white p-4">
				File Metadata Management System
			</h1>

			<div className="flex flex-1 overflow-hidden">
				<div className="w-1/4 bg-gray-60 p-4 overflow-y-auto flex flex-col">
					<SearchFiles />
					<AddFiles />
				</div>

				<div className="w-1/3 bg-white p-4 overflow-y-auto border-l border-r border-gray-300">
					<FileList />
				</div>

				<div className="w-5/12 bg-white p-4 overflow-y-auto">
					<SelectedFile />
				</div>

				<div className="bg-gray-200 p-2 text-xs text-gray-600">
					<div>Total Files: </div>
					<div>File Metadata System Version: 1.0.0</div>
				</div>
			</div>
		</div>
	)
}

export default FilesMain
