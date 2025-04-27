import { addVersion } from "@/lib/features/filesSlice"
import { versionFields } from "@/lib/forms/formFieldStates"
import { versionFormSchema } from "@/lib/forms/formSchemas"
import { useAppDispatch } from "@/lib/hooks"
import { AddVersionField, AddVersionProps } from "@/lib/store/types"
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
} from "@/ui/base"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

function AddVersion() {
	const dispatch = useAppDispatch()

	const form = useForm<z.infer<typeof versionFormSchema>>({
		resolver: zodResolver(versionFormSchema),
		defaultValues: {
			size: 0,
			modifiedBy: "",
			comment: "",
		},
	})

	function onSubmit(values: z.infer<typeof versionFormSchema>) {
		dispatch(addVersion(values as AddVersionProps))
		form.reset()
	}

	return (
		<>
			<h3 className="font-semibold mb-2">Add New Version</h3>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
					{versionFields.map((versionField: AddVersionField) => (
						<FormField
							key={versionField.name}
							control={form.control}
							name={versionField.name}
							render={({ field }) => (
								<FormItem>
									<FormLabel>{versionField.label}</FormLabel>
									<FormControl>
										<Input
											placeholder={versionField.placeholder}
											{...field}
											onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
												if (
													versionField.name === "size" &&
													!isNaN(Number(e.target.value))
												) {
													field.onChange(
														e.target.value === "" ? 0 : Number(e.target.value),
													)
												} else {
													field.onChange(e.target.value)
												}
											}}
											required
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					))}
					<Button type="submit">Add Version</Button>
				</form>
			</Form>
		</>
	)
}

export default AddVersion
