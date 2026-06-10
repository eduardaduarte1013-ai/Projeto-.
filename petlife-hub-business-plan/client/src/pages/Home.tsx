import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Heart, Leaf, TrendingUp, Users, ShoppingCart, Stethoscope, Zap, Target } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");
  const [, setLocation] = useLocation();

  const handleDownloadPlan = () => {
    const link = document.createElement('a');
    link.href = '/petlife-hub-plano-negocio.txt';
    link.download = 'PetLife-Hub-Plano-Negocio-2026.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Plano de negócios baixado com sucesso!');
  };

  const handleSchedulePresentation = () => {
    toast.info('Funcionalidade de agendamento em desenvolvimento. Entre em contato conosco!');
  };

  const scrollToTab = (tabName: string) => {
    setActiveTab(tabName);
    const tabsSection = document.querySelector('[role="tablist"]');
    if (tabsSection) {
      tabsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Dados de faturamento
  const faturamentoData = [
    { ano: "2023", valor: 68.8 },
    { ano: "2024", valor: 75.4 },
    { ano: "2025", valor: 77.96 },
    { ano: "2026 (proj.)", valor: 80 }
  ];

  // Dados de composição de receita
  const receitaComposicao = [
    { name: "Produtos", value: 50, fill: "#2D7F3E" },
    { name: "Serviços", value: 40, fill: "#FF8C42" },
    { name: "Delivery", value: 10, fill: "#1E88E5" }
  ];

  // Dados de crescimento mensal (Ano 1)
  const crescimentoMensal = [
    { mes: "M1-3", faturamento: 30 },
    { mes: "M4-6", faturamento: 50 },
    { mes: "M7-9", faturamento: 70 },
    { mes: "M10-12", faturamento: 100 }
  ];

  // Dados de custos
  const custosData = [
    { categoria: "Aluguel", valor: 8000 },
    { categoria: "Pessoal", valor: 25000 },
    { categoria: "Utilidades", valor: 2500 },
    { categoria: "Marketing", valor: 3000 },
    { categoria: "Outros", valor: 4500 }
  ];

  const COLORS = ["#2D7F3E", "#FF8C42", "#1E88E5", "#FFB84D", "#66BB6A"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663403240616/X5e8rfENfxNAS4QQhgujBW/petlife-hub-logo-G4rkusWahZyRVF28WkHKX9.webp" 
              alt="PetLife Hub" 
              className="h-10"
            />
            <div>
              <h1 className="text-lg font-bold text-gray-900">PetLife Hub</h1>
              <p className="text-xs text-gray-500">Plano de Negócios 2026</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <button 
              onClick={() => {
                setActiveTab("overview");
                setTimeout(() => {
                  const tabsSection = document.querySelector('[role="tablist"]');
                  if (tabsSection) {
                    tabsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }} 
              className="text-sm font-medium text-gray-600 hover:text-green-700 transition"
            >
              Visão Geral
            </button>
            <button 
              onClick={() => {
                setActiveTab("market");
                setTimeout(() => {
                  const tabsSection = document.querySelector('[role="tablist"]');
                  if (tabsSection) {
                    tabsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }} 
              className="text-sm font-medium text-gray-600 hover:text-green-700 transition"
            >
              Mercado
            </button>
            <button 
              onClick={() => {
                setActiveTab("financial");
                setTimeout(() => {
                  const tabsSection = document.querySelector('[role="tablist"]');
                  if (tabsSection) {
                    tabsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }} 
              className="text-sm font-medium text-gray-600 hover:text-green-700 transition"
            >
              Financeiro
            </button>
            <button 
              onClick={() => {
                setActiveTab("business");
                setTimeout(() => {
                  const tabsSection = document.querySelector('[role="tablist"]');
                  if (tabsSection) {
                    tabsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }} 
              className="text-sm font-medium text-gray-600 hover:text-green-700 transition"
            >
              Negócio
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Cuidado Integral, <span className="text-green-700">Vida Melhor</span>
              </h2>
              <p className="text-xl text-gray-600">
                PetLife Hub: O ecossistema completo de saúde, bem-estar e nutrição para animais de estimação
              </p>
            </div>
            <div className="flex gap-4">
              <Button 
              onClick={() => scrollToTab('overview')}
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg"
            >
              Explorar Plano
            </Button>
            <Button 
              onClick={handleDownloadPlan}
              variant="outline" 
              className="px-8 py-6 text-lg border-green-700 text-green-700 hover:bg-green-50"
            >
              Baixar Documento
            </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-green-700">R$ 80B</p>
                <p className="text-sm text-gray-600">Mercado em 2026</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-orange-500">9.6%</p>
                <p className="text-sm text-gray-600">Crescimento anual</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-blue-600">160M+</p>
                <p className="text-sm text-gray-600">Pets no Brasil</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663403240616/X5e8rfENfxNAS4QQhgujBW/petlife-hub-logo-G4rkusWahZyRVF28WkHKX9.webp" 
                alt="PetLife Hub Logo" 
                className="w-full max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="container py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="market">Mercado</TabsTrigger>
            <TabsTrigger value="financial">Financeiro</TabsTrigger>
            <TabsTrigger value="business">Negócio</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-md hover:shadow-lg transition">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Missão</CardTitle>
                    <Heart className="w-5 h-5 text-red-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Proporcionar soluções integradas de saúde, bem-estar e nutrição para animais de estimação, combinando tecnologia, especialização e humanização.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Visão</CardTitle>
                    <Target className="w-5 h-5 text-green-700" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Ser a referência nacional em cuidado pet premium, oferecendo um ecossistema completo que une produtos, serviços especializados e tecnologia.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Valores</CardTitle>
                    <Leaf className="w-5 h-5 text-green-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Bem-estar animal, inovação responsável, humanização, sustentabilidade, transparência e excelência operacional.</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Diferenciais Competitivos</CardTitle>
                <CardDescription>O que nos diferencia no mercado</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-green-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Integração Completa</h4>
                        <p className="text-sm text-gray-600">Produtos, serviços e tecnologia em um único lugar</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <Stethoscope className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Foco em Prevenção</h4>
                        <p className="text-sm text-gray-600">Check-ups estruturados e cuidado preventivo</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Especialização em Nichos</h4>
                        <p className="text-sm text-gray-600">Soluções para pets com necessidades específicas</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Heart className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Humanização com Ciência</h4>
                        <p className="text-sm text-gray-600">Base científica rigorosa em nutrição e saúde</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <Leaf className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Sustentabilidade</h4>
                        <p className="text-sm text-gray-600">Produtos e processos eco-responsáveis</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Tecnologia Acessível</h4>
                        <p className="text-sm text-gray-600">Sistema de gestão intuitivo e integrado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Produtos e Serviços</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <ShoppingCart className="w-5 h-5 text-green-700" />
                      Produtos
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ Rações premium e naturais</li>
                      <li>✓ Acessórios e brinquedos eco-sustentáveis</li>
                      <li>✓ Medicamentos autorizados</li>
                      <li>✓ Suplementos e vitaminas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Stethoscope className="w-5 h-5 text-orange-500" />
                      Serviços
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ Banho e tosa premium</li>
                      <li>✓ Consultas veterinárias</li>
                      <li>✓ Hospedagem confortável</li>
                      <li>✓ Adestramento comportamental</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Market Tab */}
          <TabsContent value="market" className="space-y-8">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Evolução do Mercado Pet Brasil</CardTitle>
                <CardDescription>Faturamento em bilhões de reais</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={faturamentoData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="ano" />
                    <YAxis />
                    <Tooltip formatter={(value) => `R$ ${value}B`} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="valor" 
                      stroke="#2D7F3E" 
                      strokeWidth={3}
                      dot={{ fill: "#2D7F3E", r: 6 }}
                      name="Faturamento"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Público-Alvo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Classes A e B</p>
                    <p className="text-xs text-gray-600">Menos de 20% da população, maior potencial de retorno</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Idade média: ~25 anos</p>
                    <p className="text-xs text-gray-600">Idade de adoção do primeiro pet</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">160+ milhões de pets</p>
                    <p className="text-xs text-gray-600">Animais de estimação em lares brasileiros</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">83% buscam variedade</p>
                    <p className="text-xs text-gray-600">Consideram importante oferecer variedade alimentar</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Tendências 2026</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-700 mt-1.5 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Premiunização com Recorrência</p>
                      <p className="text-xs text-gray-600">Crescimento com margem, não com volume</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Nutrição Funcional</p>
                      <p className="text-xs text-gray-600">Rações personalizadas e naturais</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Digitalização</p>
                      <p className="text-xs text-gray-600">E-commerce e plataformas de serviços</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-600 mt-1.5 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Sustentabilidade</p>
                      <p className="text-xs text-gray-600">Produtos eco-responsáveis</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Análise Competitiva</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">Petlove</p>
                      <p className="text-xs text-gray-600">E-commerce nacional</p>
                    </div>
                    <p className="text-xs font-medium text-orange-600">Sem atendimento presencial</p>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">Cobasi</p>
                      <p className="text-xs text-gray-600">Varejo tradicional</p>
                    </div>
                    <p className="text-xs font-medium text-orange-600">Serviços limitados</p>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">Zen Animal</p>
                      <p className="text-xs text-gray-600">Premium/Natural</p>
                    </div>
                    <p className="text-xs font-medium text-orange-600">Alcance limitado</p>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-2 border-green-200">
                    <div>
                      <p className="font-semibold text-gray-900">PetLife Hub</p>
                      <p className="text-xs text-gray-600">Integração completa</p>
                    </div>
                    <p className="text-xs font-medium text-green-700">Diferencial: Ecossistema</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Financial Tab */}
          <TabsContent value="financial" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Investimento Inicial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-green-700">R$ 115 mil</p>
                  <p className="text-xs text-gray-600 mt-2">Inclui reforma, equipamentos, estoque e tecnologia</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Break-even</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-orange-500">Mês 13-14</p>
                  <p className="text-xs text-gray-600 mt-2">Faturamento mensal: R$ 86 mil</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Lucro Ano 3</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-blue-600">R$ 161 mil</p>
                  <p className="text-xs text-gray-600 mt-2">Com possível segunda unidade</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Projeção de Crescimento - Ano 1</CardTitle>
                <CardDescription>Faturamento mensal em mil reais</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={crescimentoMensal}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip formatter={(value) => `R$ ${value}k`} />
                    <Bar dataKey="faturamento" fill="#2D7F3E" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Composição de Receita</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={receitaComposicao}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {receitaComposicao.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Custos Fixos Mensais</CardTitle>
                  <CardDescription>Total: R$ 43 mil</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={custosData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                      <XAxis type="number" />
                      <YAxis dataKey="categoria" type="category" width={80} />
                      <Tooltip formatter={(value) => `R$ ${value.toLocaleString()}`} />
                      <Bar dataKey="valor" fill="#FF8C42" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Projeção Financeira 3 Anos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <p className="text-sm font-semibold text-gray-700">Ano 1</p>
                      <p className="text-2xl font-bold text-red-600">-R$ 379 mil</p>
                      <p className="text-xs text-gray-600 mt-1">Ramp-up + investimento</p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <p className="text-sm font-semibold text-gray-700">Ano 2</p>
                      <p className="text-2xl font-bold text-yellow-600">-R$ 36 mil</p>
                      <p className="text-xs text-gray-600 mt-1">Operação normalizada</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm font-semibold text-gray-700">Ano 3</p>
                      <p className="text-2xl font-bold text-green-600">+R$ 161 mil</p>
                      <p className="text-xs text-gray-600 mt-1">Com segunda unidade</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Business Tab */}
          <TabsContent value="business" className="space-y-8">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Modelo de Negócio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-700">
                  <h4 className="font-semibold text-gray-900 mb-2">Varejo de Produtos</h4>
                  <p className="text-sm text-gray-600">Rações naturais, acessórios eco-sustentáveis, medicamentos autorizados e suplementos especializados</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Serviços Especializados</h4>
                  <p className="text-sm text-gray-600">Banho e tosa premium, consultas veterinárias, hospedagem e adestramento comportamental</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-semibold text-gray-900 mb-2">Tecnologia e Gestão</h4>
                  <p className="text-sm text-gray-600">Sistema integrado de agendamentos, histórico de atendimentos e relatórios financeiros automatizados</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Estratégia de Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Redes Sociais</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>📸 Instagram: Conteúdo visual e comunidade</li>
                      <li>🎬 TikTok: Vídeos dinâmicos para Geração Z</li>
                      <li>📱 Facebook: Conteúdo educativo e eventos</li>
                      <li>▶️ YouTube: Vídeos educacionais especializados</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Programa de Fidelidade</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>🥉 Bronze: 5% desconto</li>
                      <li>🥈 Prata: 10% desconto + eventos</li>
                      <li>🥇 Ouro: 15% desconto + consultas</li>
                      <li>💎 Platina: 20% desconto + prioridade</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Responsabilidade Social</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Adoção de Animais</h4>
                    <p className="text-sm text-gray-600">Parcerias com abrigos, eventos mensais e desconto para adotados</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sustentabilidade</h4>
                    <p className="text-sm text-gray-600">Embalagens biodegradáveis, programa de reciclagem e compostagem</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Parcerias com ONGs</h4>
                    <p className="text-sm text-gray-600">1% do faturamento doado, voluntariado e eventos beneficentes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Objetivos Estratégicos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Curto Prazo (0-12 meses)</p>
                    <p className="text-sm text-gray-600">Estabelecer presença física, conquistar 500 clientes, implementar sistema integrado</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-orange-50 to-green-50 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Médio Prazo (1-3 anos)</p>
                    <p className="text-sm text-gray-600">Expandir para 3-5 unidades, atingir 3.000 clientes, lançar e-commerce</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Longo Prazo (3-5 anos)</p>
                    <p className="text-sm text-gray-600">Presença em 10+ cidades, 15.000+ clientes, modelo de franquia estabelecido</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="container py-16 bg-gradient-to-r from-green-700 to-blue-600 rounded-2xl text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para transformar o mercado pet?</h2>
        <p className="text-lg mb-8 opacity-90">Conheça o plano completo de negócios da PetLife Hub</p>
        <div className="flex gap-4 justify-center">
          <Button 
            onClick={handleDownloadPlan}
            className="bg-white text-green-700 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
          >
            Baixar Plano Completo
          </Button>
          <Button 
            onClick={handleSchedulePresentation}
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-6 text-lg font-semibold"
          >
            Agendar Apresentação
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16 py-12 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">PetLife Hub</h4>
              <p className="text-sm text-gray-600">Cuidado Integral, Vida Melhor</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-green-700">Sobre</a></li>
                <li><a href="#" className="hover:text-green-700">Missão</a></li>
                <li><a href="#" className="hover:text-green-700">Valores</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-green-700">Plano Completo</a></li>
                <li><a href="#" className="hover:text-green-700">Análise de Mercado</a></li>
                <li><a href="#" className="hover:text-green-700">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-green-700">Instagram</a></li>
                <li><a href="#" className="hover:text-green-700">Facebook</a></li>
                <li><a href="#" className="hover:text-green-700">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-8 text-center text-sm text-gray-600">
            <p>© 2026 PetLife Hub. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com ❤️ para o bem-estar dos pets</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
