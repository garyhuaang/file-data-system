import { useAppSelector } from "@/lib/hooks"
import { Separator } from "@/ui/base"
import { FileTextIcon } from "lucide-react"
import AddVersion from "./AddVersion"
import FileDetails from "./FileDetails"
import SelectedFileVersions from "./SelectedFileVersions"

function SelectedFile() {
	const selectedFile = useAppSelector(
		state => state.filesSliceReducer.selectedFile,
	)

	return (
		<div className="h-full min-h-235">
			{selectedFile ? (
				<>
					<h2 className="text-lg font-bold mb-2">Details</h2>
					<FileDetails selectedFile={selectedFile} />
					<Separator className="mt-5 mb-3" />

					<h3 className="font-semibold mb-2">Version History</h3>
					<div className="h-60 overflow-auto">
						<SelectedFileVersions versions={selectedFile.versions} />
					</div>

					<Separator className="mt-3 mb-3" />
					<AddVersion />
				</>
			) : (
				<h2 className="flex flex-col h-full items-center justify-center text-2xl font-bold mb-2 bg-gray-500 text-white">
					<FileTextIcon className="h-20 w-20" />
					Select a file to view details
				</h2>
			)}
		</div>
	)
}

export default SelectedFile
