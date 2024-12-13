# Guia de Instalação para Windows - 3D Network Monitor

## Pré-requisitos

Antes de iniciar a instalação, certifique-se de que você tem o seguinte instalado em seu sistema:

1. Python 3.8 ou superior (disponível em https://www.python.org/downloads/)
2. pip (geralmente incluído com a instalação do Python)
3. Node.js 14.x ou superior
4. PostgreSQL 13 ou superior (disponível em https://www.postgresql.org/download/windows/)
5. Git


## Passos de Instalação

1. **Baixe o instalador:** Baixe o instalador do 3D Network Monitor (`3d-network-monitor-installer.exe`) do nosso site.
2. **Execute o instalador:** Clique duas vezes no arquivo baixado para iniciar o processo de instalação.
3. **Install dependencies:**
   \`\`\`powershell
   npm install
   \`\`\`
4. **Siga as instruções:** O instalador irá guiá-lo pelo processo de instalação.  Escolha o local de instalação e as opções desejadas.
5. **Set up the database:**
   \`\`\`powershell
   npm run prisma:generate
   npm run prisma:migrate
   \`\`\`
6. **Configure environment variables:**
   - Copy the `.env.example` file to `.env`
   - Update the `.env` file with your database credentials and other necessary settings
7. **Configuração do Banco de Dados:** Durante a instalação, você será solicitado a fornecer as informações de conexão com o banco de dados PostgreSQL.
8. **Criação do Atalho:** O instalador criará automaticamente um atalho na área de trabalho para o 3D Network Monitor.

## Wi-Fi Management Setup

To enable Wi-Fi management features:

1. Ensure you have the necessary permissions to access Wi-Fi information on your system.
2. Install any required Wi-Fi management libraries:
   \`\`\`powershell
   npm install node-wifi
   \`\`\`
3. Update your `.env` file with any Wi-Fi related configuration variables.

## Instalação de Plugins

Para instalar plugins no Windows:

1. Baixe o plugin (arquivo .zip ou .tar.gz).
2. Extraia o plugin para o diretório `plugins` na instalação do 3D Network Monitor.
3. Reinicie o sistema.

**Observações:**
- Plugins devem ser compatíveis com a versão atual do sistema.
- Consulte a documentação do plugin para mais detalhes.


## Desinstalação

1. **Abra o Painel de Controle:** Acesse o Painel de Controle do Windows.
2. **Programas e Recursos:** Clique em "Programas e Recursos" ou "Desinstalar um programa".
3. **Encontre o 3D Network Monitor:** Localize o 3D Network Monitor na lista de programas instalados.
4. **Desinstalar:** Clique em "Desinstalar" e siga as instruções na tela.

## Verificação Pós-Instalação

Após a instalação ou desinstalação, verifique se o programa está funcionando corretamente ou se foi removido completamente do sistema.
- Check that the Wi-Fi management features are working correctly by accessing the Wi-Fi section in the dashboard.

