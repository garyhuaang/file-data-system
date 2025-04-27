import { File } from "@/lib/store/types"
import { dateToLocaleString } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader, Label } from "@/ui/base"
import SelectedFileTags from "./SelectedFileTags"

type FileField = {
	label: string
	value: string | number | undefined
}

function FileDetails({ selectedFile }: { selectedFile: File }) {
	const fileFields: FileField[] = [
		{ label: "ID", value: selectedFile?.id },
		{ label: "Path", value: selectedFile?.path },
		{ label: "Size", value: selectedFile?.size || 0 },
		{ label: "MIME type:", value: selectedFile?.mimeType },
		{
			label: "Created at: ",
			value: dateToLocaleString(selectedFile?.createdAt),
		},
		{
			label: "Modified at: ",
			value: dateToLocaleString(selectedFile?.modifiedAt),
		},
		{ label: "Owner", value: selectedFile?.owner },
	]

	return (
		<Card>
			<CardHeader className="font-semibold mb-2">File Information</CardHeader>

			<CardContent className="grid grid-cols-2 gap-2 w-[25em]">
				{fileFields.map((field, index) => (
					<div key={index}>
						<Label className="text-gray-600">{field.label}</Label>
						<Label>{field.value}</Label>
					</div>
				))}
			</CardContent>

			<CardFooter>
				<SelectedFileTags />
			</CardFooter>
		</Card>
	)
}

export default FileDetails
