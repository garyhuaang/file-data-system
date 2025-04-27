import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { addFile } from "@/lib/features/filesSlice"
import { addFileFields } from "@/lib/forms/formFieldStates"
import { addFileFormSchema } from "@/lib/forms/formSchemas"
import { useAppDispatch } from "@/lib/hooks"
import { type AddFieldFieldState, type AddFileProps } from "@/lib/store/types"
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	Input,
} from "@/ui/base"

function AddFile() {
	const dispatch = useAppDispatch()

	const form = useForm<z.infer<typeof addFileFormSchema>>({
		resolver: zodResolver(addFileFormSchema),
		defaultValues: {
			name: "",
			path: "",
			size: 0,
			mimeType: "",
			owner: "",
			comment: "",
			tags: [],
		},
	})

	function onSubmit(values: z.infer<typeof addFileFormSchema>) {
		dispatch(addFile(values as AddFileProps))
		form.reset()
	}

	return (
		<div className=" max-h-1/2">
			<h2 className="text-lg font-bold">Add File</h2>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col space-y-2 p-4 max-w-130 min-w-80 items-center mr-1"
				>
					{addFileFields.map((fileField: AddFieldFieldState) => (
						<FormField
							key={fileField.name}
							control={form.control}
							name={fileField.name}
							render={({ field }) => (
								<FormItem className="w-full ">
									<FormLabel>{fileField.label}</FormLabel>
									<FormControl>
										<Input
											placeholder={fileField.placeholder}
											{...field}
											onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
												if (fileField.name === "size") {
													const value =
														e.target.value === "" ? 0 : Number(e.target.value)
													if (!isNaN(value)) {
														field.onChange(value)
													}
												} else {
													field.onChange(e.target.value)
												}
											}}
											required
										/>
									</FormControl>
								</FormItem>
							)}
						/>
					))}
					<div className="flex gap-2 justify-center w-3/4 mt-2">
						<Button type="submit" className="w-1/2 bg-green-500">
							Add file
						</Button>
					</div>
				</form>
			</Form>
		</div>
	)
}

export default AddFile
