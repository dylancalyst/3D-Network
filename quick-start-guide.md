# Guia de Início Rápido - 3D Network Monitor

Bem-vindo ao 3D Network Monitor! Este guia de início rápido foi projetado para ajudar você a começar a usar nossa poderosa ferramenta de monitoramento de rede em questão de minutos. Seja você um administrador de rede experiente ou um novato em monitoramento de rede, este guia o orientará através dos passos essenciais para começar a aproveitar os benefícios do 3D Network Monitor.

## Antes de Começar

Antes de mergulhar no 3D Network Monitor, certifique-se de que você tem o seguinte:

1. Credenciais de acesso: Seu nome de usuário e senha fornecidos pelo administrador do sistema.
2. Navegador web compatível: Recomendamos usar as versões mais recentes do Chrome, Firefox, ou Edge para a melhor experiência.
3. Dispositivos de rede configurados: Certifique-se de que os dispositivos que você deseja monitorar estão configurados para serem acessíveis pelo 3D Network Monitor (por exemplo, SNMP habilitado, firewalls configurados adequadamente).
4. Permissões adequadas: Verifique com seu administrador se sua conta tem as permissões necessárias para as tarefas que você planeja realizar.

Com esses pré-requisitos atendidos, você está pronto para começar!

## 1. Login e Configuração Inicial

1. Abra seu navegador e acesse `https://seu-dominio.com/3d-network-monitor`
2. Faça login com as credenciais fornecidas pelo seu administrador
3. Na primeira execução, você será guiado por um assistente de configuração:
   - Escolha seu idioma preferido
   - Selecione seu fuso horário
   - Personalize seu dashboard inicial


## 2. Explorando o Dashboard

Após o login, você verá o dashboard principal. Aqui estão os elementos-chave:

- **Mapa de Rede 3D**: Uma visualização interativa da sua topologia de rede
- **Painel de Alertas**: Mostra alertas ativos e seu status
- **Visão Geral de Dispositivos**: Lista todos os dispositivos monitorados
- **Gráficos de Desempenho**: Exibe métricas-chave de rede em tempo real
- **Adicionar Item ao Dashboard**: Adiciona novos widgets ao dashboard.
- **Remover Item do Dashboard**: Remove widgets existentes do dashboard.

## 3. Navegando pelo Mapa de Rede 3D

O Mapa de Rede 3D é uma das características mais poderosas e únicas do 3D Network Monitor. Ele fornece uma representação visual intuitiva da sua infraestrutura de rede, permitindo que você identifique rapidamente problemas e entenda as relações entre os dispositivos.

1. Acesse o Mapa de Rede 3D:
   - No menu lateral esquerdo, localize e clique no botão "Mapa de Rede 3D".
   - Aguarde alguns segundos para que o mapa carregue completamente. A velocidade de carregamento pode variar dependendo do tamanho da sua rede.

2. Navegação básica:
   - Rotação: Clique e arraste com o botão esquerdo do mouse para girar a visualização. Isso permite que você veja a topologia da rede de diferentes ângulos.
   - Zoom: Use a roda do mouse para aumentar ou diminuir o zoom. Alternativamente, você pode usar os botões "+" e "-" no canto inferior direito da tela.
   - Movimento: Clique e arraste com o botão direito do mouse para mover o mapa. Isso é útil para centralizar áreas específicas da sua rede.
   - Centralizar em um dispositivo: Dê um duplo clique em qualquer dispositivo para centralizar a visualização nele. Isso é particularmente útil em redes grandes.

3. Interagindo com dispositivos:
   - Informações rápidas: Passe o mouse sobre qualquer dispositivo para ver um tooltip com informações básicas, como nome do dispositivo, endereço IP e status atual.
   - Detalhes do dispositivo: Clique em um dispositivo para abrir o painel de detalhes à direita. Este painel fornece informações mais aprofundadas, incluindo:
     * Especificações do hardware
     * Métricas de desempenho em tempo real
     * Gráficos de utilização
     * Alertas ativos
     * Lista de interfaces e seu status

4. Personalizando a visualização:
   - Filtros: Use os filtros no topo da tela para mostrar apenas certos tipos de dispositivos ou conexões.
   - Esquemas de cores: Experimente diferentes esquemas de cores para representar o status ou a carga dos dispositivos.
   - Layouts: Alterne entre diferentes layouts (hierárquico, circular, etc.) para encontrar a melhor visualização para sua rede.

5. Dicas avançadas:
   - Use a função de busca para localizar rapidamente dispositivos específicos no mapa.
   - Agrupe dispositivos por função ou localização para uma visão mais organizada.
   - Salve visualizações personalizadas para acesso rápido no futuro.

Lembre-se, o Mapa de Rede 3D é uma ferramenta poderosa que se torna mais útil à medida que você se familiariza com ela. Não hesite em explorar e experimentar diferentes visualizações para encontrar o que funciona melhor para você e sua equipe.

## 4. Configurando seu Primeiro Alerta

Os alertas são cruciais para manter sua rede funcionando sem problemas. Vamos configurar um alerta básico para monitorar a utilização de CPU de um dispositivo importante:

1. Navegue até "Alertas" > "Criar Novo Alerta" no menu lateral.

2. No formulário de criação de alerta:
   - Tipo de Alerta: Escolha "Utilização de CPU" no menu suspenso.
   - Dispositivo Alvo: Selecione um dispositivo crítico, como um servidor principal ou roteador de borda.
   - Limite: Defina o limite de CPU. Por exemplo, digite "80" para acionar o alerta quando a utilização de CPU ultrapassar 80%.
   - Duração: Especifique por quanto tempo a condição deve persistir antes de acionar o alerta. Por exemplo, "5" minutos.
   - Severidade: Escolha entre Baixa, Média ou Alta. Para utilização de CPU, "Alta" é geralmente apropriada.

3. Configure as notificações:
   - Selecione o método de notificação (e-mail, SMS, ou ambos).
   - Insira os detalhes de contato necessários (endereço de e-mail ou número de telefone).

4. Revise suas configurações e clique em "Salvar".

5. Teste o alerta:
   - Use a função "Testar Alerta" para simular uma condição de alerta.
   - Verifique se você recebe a notificação conforme configurado.

Dica: Comece com alguns alertas críticos e vá ajustando conforme necessário. Muitos alertas podem levar à fadiga de alertas, onde alertas importantes podem ser perdidos no ruído.

## 5. Gerando um Relatório Rápido

Os relatórios ajudam a visualizar tendências e tomar decisões informadas. Vamos gerar um relatório rápido de desempenho de rede:

1. No menu lateral, vá para "Relatórios" > "Novo Relatório Rápido".

2. Na página de criação de relatório:
   - Tipo de Relatório: Selecione "Desempenho de Rede" no menu suspenso.
   - Período: Escolha o intervalo de tempo desejado (últimas 24 horas, 7 dias, etc.).
   - Dispositivos: Selecione os dispositivos que deseja incluir no relatório, ou escolha "Todos" para uma visão geral completa.

3. Clique em "Gerar Relatório".

4. Após a geração, você terá opções para:
   - Visualizar o relatório diretamente no navegador
   - Fazer download em formato PDF para compartilhamento ou arquivamento
   - Agendar o relatório para geração automática regular

Dica: Relatórios regulares são excelentes para reuniões de equipe e para acompanhar o desempenho da rede ao longo do tempo.

## 6. Usando Ferramentas de Diagnóstico

As ferramentas de diagnóstico integradas do 3D Network Monitor são essenciais para solução de problemas rápida:

1. No menu lateral, vá para "Ferramentas" > "Diagnóstico".

2. Escolha uma ferramenta:
   - Ping: Verifica a conectividade básica com um dispositivo.
   - Traceroute: Mostra o caminho que os pacotes tomam até um destino.
   - DNS Lookup: Resolve nomes de domínio para endereços IP.
   - Port Scan: Verifica quais portas estão abertas em um dispositivo.

3. Insira o endereço IP ou hostname do dispositivo alvo.

4. Clique em "Executar" para iniciar o diagnóstico.

5. Analise os resultados apresentados na tela.

Dica: Use estas ferramentas proativamente para verificar a saúde da rede, não apenas quando problemas surgem.

## 7. Personalizando seu Dashboard

Um dashboard personalizado permite que você veja as informações mais importantes à primeira vista:

1. No dashboard principal, clique no ícone de engrenagem no canto superior direito.

2. Para reorganizar:
   - Clique e arraste os widgets para novas posições.
   - Redimensione widgets arrastando suas bordas.

3. Para adicionar ou remover widgets:
  - Clique em "Adicionar Item ao Dashboard" para adicionar um novo widget.
  - Clique no "X" no canto superior direito de um widget para removê-lo.

4. Para personalizar widgets existentes:
  - Clique em "Adicionar Item ao Dashboard".
  - Selecione o widget que deseja adicionar.
  - Clique no ícone de menu (três pontos) no canto de cada widget.
  - Escolha "Editar" para ajustar as configurações do widget, como intervalo de tempo ou dispositivos mostrados.

5. Quando estiver satisfeito com o layout, clique em "Salvar Dashboard" no topo da página.

Dica: Crie múltiplos dashboards para diferentes propósitos ou equipes. Por exemplo, um para operações diárias e outro para planejamento de capacidade.

## Próximos Passos

Parabéns! Você agora tem uma compreensão básica das principais funcionalidades do 3D Network Monitor. Para aprofundar seus conhecimentos:

- Explore os tutoriais em vídeo disponíveis em "Ajuda" > "Tutoriais" para aprender sobre recursos mais avançados.
- Participe de nosso webinar semanal de introdução. As datas estão disponíveis na seção "Eventos" do portal de suporte.
- Visite nosso fórum de usuários para dicas e truques da comunidade, bem como para compartilhar suas próprias descobertas.

Lembre-se, o monitoramento eficaz de rede é uma habilidade que se desenvolve com o tempo. Continue explorando o 3D Network Monitor e não hesite em experimentar diferentes configurações e recursos.

Para suporte adicional, nossa equipe está sempre disponível:
- Email: suporte@3dnetworkmonitor.com
- Chat ao vivo: Disponível no canto inferior direito da interface do 3D Network Monitor
- Telefone: +1 (555) 123-4567 (horário comercial)

Boa sorte e feliz monitoramento!

