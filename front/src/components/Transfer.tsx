import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"



export function Transfer() {
    const form = useForm({
        defaultValues: {
            from: "0xC31d5ECdc839e1cd8A8489D8D78335a07Ad82425",
            to: "0x3e3976a0d63A28c115037048A2Ae0FE9e456f474",
            amount: 10
        }
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return <div className="space-y-4 mt-4">

        <h1 className="text-xl font-bold">Transfer</h1>
        <p></p>
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8">
                <FormField
                    control={form.control}
                    name="from"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cuenta Origen</FormLabel>
                            <FormControl>
                                <Input placeholder="0xc3..." {...field} />
                            </FormControl>
                            <FormDescription>
                                Origen de la Transaccion
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="to"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cuenta destino</FormLabel>
                            <FormControl>
                                <Input placeholder="0xc3..." {...field} />
                            </FormControl>
                            <FormDescription>
                                Cuenta de destino
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                /><FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cantidad</FormLabel>
                            <FormControl>
                                <Input placeholder="100" {...field} />
                            </FormControl>
                            <FormDescription>
                                Cantidad
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />




                <Button type="submit">Transfer</Button>
            </form>
        </Form>


    </div>
}

