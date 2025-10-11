import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Building, 
  Home, 
  Wrench, 
  Settings,
  MessageSquare, 
  ShoppingCart, 
  Calendar, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Bot,
  Users,
  TrendingUp,
  Megaphone,
  UserCheck,
  Briefcase,
  ClipboardList,
  Eye,
  AlertTriangle,
  FileText,
  Package,
  Database,
  Share2,
  Phone,
  Mail,
  Globe,
  CreditCard,
  Banknote,
  FileBarChart,
  BarChart,
  Cloud,
  Building2
} from "lucide-react";
import aiAgentImage from "@/assets/ai-agent.jpg";
import ContactForm from "./ContactForm";

interface BusinessSegment {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{className?: string}>;
}

interface AIFunctionality {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{className?: string}>;
}

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{className?: string}>;
}

interface TemperatureOption {
  id: string;
  name: string;
  description: string;
  type: 'name' | 'gender' | 'creativity' | 'personality';
}

const businessSegments: BusinessSegment[] = [
  { id: 'imobiliaria', name: 'Imobiliária', description: 'Gestão de propriedades e clientes', icon: Building },
  { id: 'condominios', name: 'Condomínios', description: 'Administração predial inteligente', icon: Home },
  { id: 'servicos', name: 'Serviços', description: 'Prestação de serviços diversos', icon: Wrench },
  { id: 'outros', name: 'Outros', description: 'Outros segmentos de mercado', icon: Settings }
];

const aiFunctionalities: AIFunctionality[] = [
  { id: 'atendimento', name: 'Atendimento 24/7', description: 'Resposta automática e inteligente', icon: MessageSquare },
  { id: 'vendas', name: 'Assistente de Vendas', description: 'Qualificação e conversão de leads', icon: ShoppingCart },
  { id: 'agendamento', name: 'Agendamento Inteligente', description: 'Coordenação automática de horários', icon: Calendar },
  { id: 'analise', name: 'Análise de Dados', description: 'Relatórios e insights automáticos', icon: BarChart3 },
  { id: 'processos', name: 'Automação de Processos', description: 'Fluxos de trabalho otimizados', icon: Settings },
  { id: 'acompanhamento', name: 'Acompanhamento', description: 'Monitoramento contínuo de processos', icon: Eye },
  { id: 'qualificacao', name: 'Qualificação de Lead', description: 'Análise e classificação de prospects', icon: UserCheck },
  { id: 'marketing', name: 'Marketing', description: 'Automação de campanhas e conteúdo', icon: Megaphone },
  { id: 'rh', name: 'Recursos Humanos', description: 'Gestão de pessoas e processos', icon: Users },
  { id: 'dp', name: 'Departamento Pessoal', description: 'Administração de funcionários', icon: Briefcase },
  { id: 'pos_venda', name: 'Pós-Venda', description: 'Suporte e relacionamento pós-compra', icon: TrendingUp },
  { id: 'monitoramento', name: 'Monitoramento', description: 'Supervisão em tempo real', icon: Eye },
  { id: 'ocorrencias', name: 'Ocorrências', description: 'Gestão de incidentes e problemas', icon: AlertTriangle },
  { id: 'ordem_servico', name: 'Ordem de Serviço', description: 'Controle de solicitações de serviço', icon: FileText },
  { id: 'pedidos', name: 'Pedidos', description: 'Processamento de solicitações', icon: Package },
  { id: 'outros_func', name: 'Outros', description: 'Funcionalidades personalizadas', icon: Settings },
  { id: 'audio_texto', name: 'Responder em Áudio e Texto', description: 'Comunicação multimodal', icon: MessageSquare }
];

const integrations: Integration[] = [
  { id: 'crm', name: 'CRM', description: 'Integração com sistemas de CRM', icon: Database },
  { id: 'erp', name: 'ERP', description: 'Integração com sistemas ERP', icon: Database },
  { id: 'outros_int', name: 'Outros', description: 'Integrações personalizadas', icon: Settings },
  { id: 'whatsapp', name: 'WhatsApp Business', description: 'API do WhatsApp Business', icon: MessageSquare },
  { id: 'instagram', name: 'Instagram Direct', description: 'Mensagens diretas do Instagram', icon: Share2 },
  { id: 'facebook', name: 'Facebook Messenger', description: 'Chat do Facebook', icon: Share2 },
  { id: 'telegram', name: 'Telegram', description: 'Bot para Telegram', icon: Share2 },
  { id: 'email', name: 'E-mail', description: 'Automação por e-mail', icon: Mail },
  { id: 'chatbot_site', name: 'Chatbot no Site', description: 'Widget de chat no website', icon: Globe },
  { id: 'ligacoes', name: 'Ligações Telefônicas', description: 'Integração com telefonia', icon: Phone },
  { id: 'pix', name: 'Pix', description: 'Pagamentos via Pix', icon: CreditCard },
  { id: 'cartao', name: 'Cartão de Crédito/Débito', description: 'Gateway de pagamentos', icon: CreditCard },
  { id: 'boleto', name: 'Boleto Bancário', description: 'Emissão de boletos', icon: Banknote },
  { id: 'trello', name: 'Trello', description: 'Gestão de projetos', icon: FileBarChart },
  { id: 'powerbi', name: 'PowerBI', description: 'Business intelligence', icon: BarChart },
  { id: 'clickup', name: 'ClickUp', description: 'Gestão de tarefas', icon: FileBarChart },
  { id: 'google', name: 'Google Workspace', description: 'Drive, Docs, Sheets, Gmail', icon: Cloud },
  { id: 'microsoft', name: 'Microsoft 365', description: 'Teams, Outlook, Excel, SharePoint', icon: Building2 }
];

const temperatureOptions: TemperatureOption[] = [
  { id: 'name_field', name: 'Nome Personalizado', description: 'Campo de texto livre (ex.: Izabela, Rafael, DashBot)', type: 'name' },
  { id: 'feminino', name: 'Feminino', description: 'Voz e personalidade feminina', type: 'gender' },
  { id: 'masculino', name: 'Masculino', description: 'Voz e personalidade masculina', type: 'gender' },
  { id: 'sem_genero', name: 'Sem gênero definido', description: 'Neutro, sem características de gênero', type: 'gender' },
  { id: 'muito_objetivo', name: 'Muito Objetivo (0.0 – 0.2)', description: 'Respostas diretas e precisas', type: 'creativity' },
  { id: 'equilibrado', name: 'Equilibrado (0.3 – 0.5)', description: 'Balance entre objetividade e criatividade', type: 'creativity' },
  { id: 'criativo_moderado', name: 'Criativo Moderado (0.6 – 0.7)', description: 'Respostas mais elaboradas', type: 'creativity' },
  { id: 'muito_criativo', name: 'Muito Criativo (0.8 – 1.0)', description: 'Respostas altamente criativas', type: 'creativity' },
  { id: 'formal', name: 'Formal e Profissional', description: 'Tom corporativo e respeitoso', type: 'personality' },
  { id: 'amigavel', name: 'Amigável e Acessível', description: 'Comunicação calorosa e próxima', type: 'personality' },
  { id: 'tecnico', name: 'Técnico e Direto', description: 'Foco em informações técnicas', type: 'personality' },
  { id: 'persuasivo', name: 'Persuasivo (Foco em Vendas)', description: 'Orientado para conversões', type: 'personality' },
  { id: 'personalizado', name: 'Personalizado', description: 'Definido pelo cliente', type: 'personality' }
];

const AIConfigurator = () => {
  const [selectedSegment, setSelectedSegment] = useState<string>('');
  const [selectedFunctionalities, setSelectedFunctionalities] = useState<string[]>([]);
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([]);
  const [selectedTemperature, setSelectedTemperature] = useState<Record<string, string>>({});
  const [customName, setCustomName] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const handleSegmentSelect = (segmentId: string) => {
    setSelectedSegment(segmentId);
    setCurrentStep(2);
  };

  const toggleFunctionality = (functionalityId: string) => {
    setSelectedFunctionalities(prev => 
      prev.includes(functionalityId) 
        ? prev.filter(id => id !== functionalityId)
        : [...prev, functionalityId]
    );
  };

  const toggleIntegration = (integrationId: string) => {
    setSelectedIntegrations(prev => 
      prev.includes(integrationId) 
        ? prev.filter(id => id !== integrationId)
        : [...prev, integrationId]
    );
  };

  const handleTemperatureSelect = (type: string, optionId: string) => {
    setSelectedTemperature(prev => ({
      ...prev,
      [type]: optionId
    }));
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetConfiguration = () => {
    setSelectedSegment('');
    setSelectedFunctionalities([]);
    setSelectedIntegrations([]);
    setSelectedTemperature({});
    setCustomName('');
    setCurrentStep(1);
  };

  const canProceedFromStep = (step: number) => {
    switch (step) {
      case 1: return selectedSegment !== '';
      case 2: return selectedFunctionalities.length > 0;
      case 3: return selectedIntegrations.length > 0;
      case 4: return Object.keys(selectedTemperature).length > 0;
      default: return true;
    }
  };

  if (currentStep === 5) {
    return <ContactForm />;
  }

  return (
    <section id="configurator" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Configure Seu <span className="gradient-text">Funcionário IA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Personalize as funcionalidades do seu agente de IA de acordo com seu setor e necessidades específicas (Passo {currentStep} de 5)
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Configuration Panel */}
            <div className="space-y-8">
              {/* Step 1: Select Segment */}
              {currentStep === 1 && (
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        1
                      </span>
                      Selecione seu Segmento
                    </CardTitle>
                    <CardDescription>
                      Escolha o segmento que melhor descreve seu negócio
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {businessSegments.map((segment) => {
                        const Icon = segment.icon;
                        return (
                          <Button
                            key={segment.id}
                            variant={selectedSegment === segment.id ? "ai-primary" : "outline"}
                            className="h-auto p-4 flex-col gap-2"
                            onClick={() => handleSegmentSelect(segment.id)}
                          >
                            <Icon className="w-6 h-6" />
                            <div className="text-center">
                              <div className="font-semibold">{segment.name}</div>
                              <div className="text-xs opacity-80">{segment.description}</div>
                            </div>
                          </Button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Select Functionalities */}
              {currentStep === 2 && (
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        2
                      </span>
                      Selecione as Funcionalidades
                    </CardTitle>
                    <CardDescription>
                      Escolha os recursos que seu funcionário IA deve ter
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                      {aiFunctionalities.map((functionality) => {
                        const Icon = functionality.icon;
                        const isSelected = selectedFunctionalities.includes(functionality.id);
                        
                        return (
                          <div
                            key={functionality.id}
                            className={`flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
                              isSelected 
                                ? 'bg-primary/10 border-primary' 
                                : 'bg-background hover:bg-muted/50 border-border'
                            }`}
                            onClick={() => toggleFunctionality(functionality.id)}
                          >
                            <div className={`p-2 rounded-lg ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-sm">{functionality.name}</h4>
                              <p className="text-xs text-muted-foreground">{functionality.description}</p>
                            </div>
                            {isSelected && <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />}
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Select Integrations */}
              {currentStep === 3 && (
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        3
                      </span>
                      Selecione as Integrações
                    </CardTitle>
                    <CardDescription>
                      Escolha os sistemas e canais que deseja integrar
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                      {integrations.map((integration) => {
                        const Icon = integration.icon;
                        const isSelected = selectedIntegrations.includes(integration.id);
                        
                        return (
                          <div
                            key={integration.id}
                            className={`flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
                              isSelected 
                                ? 'bg-primary/10 border-primary' 
                                : 'bg-background hover:bg-muted/50 border-border'
                            }`}
                            onClick={() => toggleIntegration(integration.id)}
                          >
                            <div className={`p-2 rounded-lg ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-sm">{integration.name}</h4>
                              <p className="text-xs text-muted-foreground">{integration.description}</p>
                            </div>
                            {isSelected && <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />}
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Select Temperature */}
              {currentStep === 4 && (
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        4
                      </span>
                      Selecione a Temperatura
                    </CardTitle>
                    <CardDescription>
                      Configure a personalidade e comportamento do seu IA
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Nome */}
                    <div className="space-y-3">
                      <Label htmlFor="custom-name">Nome do Funcionário IA</Label>
                      <Input
                        id="custom-name"
                        placeholder="Ex: Izabela, Rafael, DashBot..."
                        value={customName}
                        onChange={(e) => setCustomName(e.target.value)}
                      />
                    </div>

                    {/* Gênero */}
                    <div className="space-y-3">
                      <Label>Gênero</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {temperatureOptions.filter(opt => opt.type === 'gender').map((option) => (
                          <Button
                            key={option.id}
                            variant={selectedTemperature.gender === option.id ? "ai-primary" : "outline"}
                            size="sm"
                            onClick={() => handleTemperatureSelect('gender', option.id)}
                          >
                            {option.name}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Criatividade */}
                    <div className="space-y-3">
                      <Label>Nível de Criatividade</Label>
                      <div className="space-y-2">
                        {temperatureOptions.filter(opt => opt.type === 'creativity').map((option) => (
                          <Button
                            key={option.id}
                            variant={selectedTemperature.creativity === option.id ? "ai-primary" : "outline"}
                            className="w-full justify-start h-auto p-3"
                            onClick={() => handleTemperatureSelect('creativity', option.id)}
                          >
                            <div className="text-left">
                              <div className="font-semibold">{option.name}</div>
                              <div className="text-xs opacity-80">{option.description}</div>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Personalidade */}
                    <div className="space-y-3">
                      <Label>Personalidade</Label>
                      <div className="space-y-2">
                        {temperatureOptions.filter(opt => opt.type === 'personality').map((option) => (
                          <Button
                            key={option.id}
                            variant={selectedTemperature.personality === option.id ? "ai-primary" : "outline"}
                            className="w-full justify-start h-auto p-3"
                            onClick={() => handleTemperatureSelect('personality', option.id)}
                          >
                            <div className="text-left">
                              <div className="font-semibold">{option.name}</div>
                              <div className="text-xs opacity-80">{option.description}</div>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                {currentStep > 1 && (
                  <Button variant="outline" onClick={prevStep}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Button>
                )}
                
                <Button variant="outline" onClick={resetConfiguration}>
                  Recomeçar
                </Button>

                {currentStep < 4 && (
                  <Button 
                    variant="hero" 
                    className="flex-1 group" 
                    onClick={nextStep}
                    disabled={!canProceedFromStep(currentStep)}
                  >
                    Próximo
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                )}

                {currentStep === 4 && (
                  <Button 
                    variant="hero" 
                    className="flex-1 group" 
                    onClick={nextStep}
                    disabled={!canProceedFromStep(currentStep)}
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                )}
              </div>
            </div>

            {/* Visual Preview */}
            <div className="relative">
              <div className="relative group">
                <img 
                  src={aiAgentImage} 
                  alt="Agente de IA personalizado"
                  className="w-full h-auto rounded-2xl shadow-2xl hover-glow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-2xl"></div>
                
                {/* Center AI indicator */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-primary/20 backdrop-blur-md rounded-full p-6 animate-glow">
                    <Bot className="w-8 h-8 text-primary" />
                    {customName && (
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-1">
                        <span className="text-sm font-medium">{customName}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Step indicators */}
                <div className="absolute top-6 left-6 space-y-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i + 1 <= currentStep 
                          ? 'bg-primary' 
                          : i + 1 === currentStep + 1 
                            ? 'bg-primary/50' 
                            : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>

                {/* Floating indicators based on step */}
                <div className="absolute top-6 right-6 space-y-2">
                  {currentStep >= 1 && selectedSegment && (
                    <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 shadow-lg">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">
                        {businessSegments.find(s => s.id === selectedSegment)?.name}
                      </span>
                    </div>
                  )}
                  
                  {currentStep >= 2 && selectedFunctionalities.length > 0 && (
                    <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 shadow-lg">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">
                        {selectedFunctionalities.length} funcionalidades
                      </span>
                    </div>
                  )}

                  {currentStep >= 3 && selectedIntegrations.length > 0 && (
                    <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 shadow-lg">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">
                        {selectedIntegrations.length} integrações
                      </span>
                    </div>
                  )}

                  {currentStep >= 4 && Object.keys(selectedTemperature).length > 0 && (
                    <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 shadow-lg">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Personalizado</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Configuration Summary */}
              <Card className="mt-6 animate-slide-up">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-3">Progresso da Configuração:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className={`w-2 h-2 rounded-full ${selectedSegment ? 'bg-green-500' : 'bg-muted'}`}></span>
                      <span className="text-muted-foreground">Segmento:</span>
                      <span className="font-medium">
                        {selectedSegment ? businessSegments.find(s => s.id === selectedSegment)?.name : 'Não selecionado'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className={`w-2 h-2 rounded-full ${selectedFunctionalities.length > 0 ? 'bg-green-500' : 'bg-muted'}`}></span>
                      <span className="text-muted-foreground">Funcionalidades:</span>
                      <span className="font-medium">{selectedFunctionalities.length} selecionadas</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className={`w-2 h-2 rounded-full ${selectedIntegrations.length > 0 ? 'bg-green-500' : 'bg-muted'}`}></span>
                      <span className="text-muted-foreground">Integrações:</span>
                      <span className="font-medium">{selectedIntegrations.length} selecionadas</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className={`w-2 h-2 rounded-full ${Object.keys(selectedTemperature).length > 0 ? 'bg-green-500' : 'bg-muted'}`}></span>
                      <span className="text-muted-foreground">Personalização:</span>
                      <span className="font-medium">
                        {Object.keys(selectedTemperature).length > 0 ? 'Configurada' : 'Não configurada'}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConfigurator;