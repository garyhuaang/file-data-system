import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { resetSearch, searchFile } from "@/lib/features/filesSlice"
import { searchFields } from "@/lib/forms/formFieldStates"
import { searchFormSchema } from "@/lib/forms/formSchemas"
import { useAppDispatch } from "@/lib/hooks"
import { SearchFileProps, type SearchFieldState } from "@/lib/store/types"
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	Input,
} from "@/ui/base"

function SearchFile() {
	const dispatch = useAppDispatch()

	const form = useForm<z.infer<typeof searchFormSchema>>({
		resolver: zodResolver(searchFormSchema),
		defaultValues: {
			name: "",
			owner: "",
			mimeType: "",
			tags: "",
		},
	})

	function onSubmit(values: z.infer<typeof searchFormSchema>) {
		dispatch(searchFile(values as SearchFileProps))
	}

	function handleReset() {
		dispatch(resetSearch())
		form.reset()
	}

	return (
		<div className=" max-h-1/2">
			<h2 className="text-lg font-bold bg-gray-90 shadow-accent-foreground">
				Search Files
			</h2>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col space-y-2 p-4 max-w-130 min-w-80 items-center mr-1"
				>
					{searchFields.map((searchField: SearchFieldState) => (
						<FormField
							key={searchField.name}
							control={form.control}
							name={searchField.name as "name"}
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>{searchField.label}</FormLabel>
									<FormControl>
										<Input placeholder={searchField.placeholder} {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
					))}
					<div className="flex gap-2 justify-center w-3/4 mt-2">
						<Button type="submit" className="w-1/2">
							Search
						</Button>
						<Button variant="outline" className="w-1/2" onClick={handleReset}>
							Reset
						</Button>
					</div>
				</form>
			</Form>
		</div>
	)
}

export default SearchFile
