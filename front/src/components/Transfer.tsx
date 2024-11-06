import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { ethers } from "ethers";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { Loader, Loader2 } from "lucide-react";



export function Transfer() {
    const [tx, setTx] = useState<object | null>(null);
    const [loading, setLoading] = useState(false);
    const form = useForm({
        defaultValues: {
            from: "0xC31d5ECdc839e1cd8A8489D8D78335a07Ad82425",
            to: "0x3e3976a0d63A28c115037048A2Ae0FE9e456f474",
            amount: 10
        }
    });

    const onSubmit = async (data: any) => {
        setLoading(true);
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner(data.from)
        const t = await signer.sendTransaction({
            to: data.to,
            value: ethers.parseEther(data.amount.toString())
        })
        const tx = await t.wait()
        setTx(tx);
        setLoading(false)
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




                <Button type="submit">
                    <Loader2 size={16} className={loading ? "animate-spin" : "hidden"} />
                    Transfer</Button>
            </form>
        </Form>
        {tx && (
            <div>
                <h2>Transacción realizada</h2>
                <pre>{JSON.stringify(tx, null, 4)}</pre>
            </div>
        )}

    </div>
}

