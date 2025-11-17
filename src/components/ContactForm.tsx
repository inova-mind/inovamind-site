import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
	name: z
		.string()
		.min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
	email: z.string().email({ message: "Por favor, insira um email válido." }),
	celular: z
		.string()
		.min(10, { message: "O celular deve ter pelo menos 10 caracteres." }),
	company: z.string().optional(),
	message: z
		.string()
		.min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

type FormData = z.infer<typeof formSchema>;

interface ConfiguratorData {
	selectedSegment: string;
	selectedFunctionalities: string[];
	selectedIntegrations: string[];
	selectedTemperature: Record<string, string>;
	customName: string;
}

const ContactForm = ({ config }: { config: ConfiguratorData }) => {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			celular: "",
			company: "",
			message: "",
		},
	});

	const onSubmit = async (data: FormData) => {
		try {
			const response = await fetch(
				"https://n8n.inovamind.dev/webhook/send-lead-data",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${import.meta.env.VITE_WEBHOOK_TOKEN}`,
					},
					body: JSON.stringify({ ...data, ...config }),
				},
			);

			if (response.ok) {
				toast.success("Orçamento solicitado com sucesso!", {
					description:
						"Entraremos em contato em breve com sua proposta personalizada.",
				});
				form.reset();
			} else {
				toast.error("Erro ao solicitar orçamento.", {
					description:
						"Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente mais tarde.",
				});
			}
		} catch (error) {
			toast.error("Erro ao solicitar orçamento.", {
				description:
					"Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente mais tarde.",
			});
		}
	};

	return (
		<section className="py-20 bg-gradient-to-b from-muted/20 to-background">
			<div className="container mx-auto px-4">
				<Card className="max-w-2xl mx-auto hover-lift">
					<CardHeader className="text-center">
						<CardTitle className="text-3xl lg:text-5xl font-bold mb-4">
							Solicite seu{" "}
							<span className="gradient-text">Orçamento</span>
						</CardTitle>
						<CardDescription className="text-xl text-muted-foreground">
							Preencha o formulário abaixo com os detalhes da sua
							configuração. Nossa equipe entrará em contato em
							breve.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-6"
							>
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Nome Completo</FormLabel>
											<FormControl>
												<Input
													placeholder="Seu nome completo"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													placeholder="seu.email@empresa.com"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="celular"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Celular</FormLabel>
											<FormControl>
												<Input
													placeholder="(99) 99999-9999"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="company"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Empresa (Opcional)
											</FormLabel>
											<FormControl>
												<Input
													placeholder="Nome da sua empresa"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Mensagem</FormLabel>
											<FormControl>
												<Textarea
													placeholder="Descreva o que você precisa ou inclua detalhes adicionais sobre sua configuração."
													className="min-h-[120px]"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button
									type="submit"
									variant="hero"
									className="w-full text-lg"
								>
									Enviar Solicitação
								</Button>
							</form>
						</Form>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default ContactForm;
