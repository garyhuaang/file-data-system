import AddFiles from "../FileActions/AddFile"
import SearchFiles from "../FileActions/SearchFile"
import FileList from "../FileList"
import SelectedFile from "../SelectedFile/SelectedFile"

const FilesMain = () => {
	return (
		<div className="flex flex-col h-full">
			<div className="flex bg-primary shadow-md justify-between items-center">
				<h1 className="text-2xl font-bold text-white p-4">
					File Metadata Management System
				</h1>
				<div className="w-38 text-xs text-white p-4">
					<div>Total Files: 5</div>
					<div>File Metadata System Version: 1.0.0</div>
				</div>
			</div>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 h-full">
				<div className="bg-gray-100 p-4 min-h-200 overflow-hidden">
					<SearchFiles />
					<AddFiles />
				</div>
				<div className="min-h-150 bg-white p-4 overflow-auto border-l border-r border-gray-300 ">
					<FileList />
				</div>
				<div className="lg:col-span-1 md:col-span-2 bg-white p-4 ">
					<SelectedFile />
				</div>
			</div>
		</div>
	)
}

export default FilesMain
