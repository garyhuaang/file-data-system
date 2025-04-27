import { useAppDispatch } from "@/lib/hooks"

import {
	Badge,
	Button,
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	Label,
} from "@/ui/base"

import { selectFile } from "@/lib/features/filesSlice"
import { sampleFiles } from "@/lib/utils"

function FileList() {
	const dispatch = useAppDispatch()

	return (
		<div className="flex flex-col h-full">
			<h2 className="text-lg font-bold mb-2">Files:</h2>
			<div className="overflow-auto space-y-2 self-center p-3">
				{sampleFiles.map(file => (
					<Card
						key={file.id}
						id={file.id.toString()}
						className={"p-3 border rounded cursor-pointer w-80"}
						onClick={() => dispatch(selectFile(file))}
					>
						<CardHeader className="flex justify-between items-center">
							<Label className="font-semibold">{file.name}</Label>
							<Button
								variant="link"
								className="text-red-500 hover:text-red-700"
							>
								Delete
							</Button>
						</CardHeader>
						<CardContent>
							<Label className="text-sm text-gray-600">Path: {file.path}</Label>
							<Label className="text-sm text-gray-600">
								Size:
								{file.size}
							</Label>
							<Label className="text-sm text-gray-600">
								Type: {file.mimeType}
							</Label>
							<Label className="text-sm text-gray-600">
								Owner: {file.owner}
							</Label>
						</CardContent>
						<CardFooter>
							<div className="flex gap-1 text-sm ">
								<Label className="text-gray-600">Tags: </Label>
								{file.tags.map((tag: string, i: number) => (
									<Badge variant="secondary" key={i}>
										{tag}
									</Badge>
								))}
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	)
}

export default FileList
