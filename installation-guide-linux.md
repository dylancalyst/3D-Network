# Guia de Instalação para Linux - 3D Network Monitor

## Pré-requisitos

Antes de iniciar a instalação, certifique-se de que você tem o seguinte instalado em seu sistema:

1. Python 3.8 ou superior
2. pip (gerenciador de pacotes do Python)
3. PostgreSQL 13 ou superior
4. Node.js 14.x ou superior
5. Git


## Passos de Instalação

1. Clone o repositório do 3D Network Monitor:

3. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

4. **Set up the database:**
   \`\`\`bash
   npm run prisma:generate
   npm run prisma:migrate
   \`\`\`

5. **Configure environment variables:**
   - Copy the `.env.example` file to `.env`
   - Update the `.env` file with your database credentials and other necessary settings

7. **Criar Atalho na Área de Trabalho:**
 - Após a instalação, execute o script para criar um atalho na área de trabalho:
 \`\`\`bash
 python3 scripts/create_desktop_shortcut.py
 \`\`\`
 - Um ícone "3D Network Monitor" será criado na sua área de trabalho.

## Instalação de Plugins

Para instalar plugins no Linux:

1. Baixe o plugin (arquivo .zip ou .tar.gz).
2. Extraia o plugin para o diretório `plugins` na instalação do 3D Network Monitor.
3. Reinicie o sistema.

**Observações:**
- Plugins devem ser compatíveis com a versão atual do sistema.
- Consulte a documentação do plugin para mais detalhes.

## Wi-Fi Management Setup

To enable Wi-Fi management features:

1. Ensure you have the necessary permissions to access Wi-Fi information on your system.
2. Install any required Wi-Fi management libraries:
   \`\`\`bash
   sudo apt-get install wireless-tools
   npm install node-wifi
   \`\`\`
3. Update your `.env` file with any Wi-Fi related configuration variables.


## Verificação Pós-Instalação

- Check that the Wi-Fi management features are working correctly by accessing the Wi-Fi section in the dashboard.

