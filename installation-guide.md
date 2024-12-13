# Guia de Instalação - 3D Network Monitor

## Sumário

1. [Requisitos do Sistema](#requisitos-do-sistema)
2. [Instalação no Windows](#instalação-no-windows)
3. [Instalação no Linux](#instalação-no-linux)
4. [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
5. [Configuração de Variáveis de Ambiente](#configuração-de-variáveis-de-ambiente)
6. [Inicialização do Sistema](#inicialização-do-sistema)
7. [Verificação Pós-Instalação](#verificação-pós-instalação)
8. [Solução de Problemas](#solução-de-problemas)
9. [Instalação de Plugins](#instalação-de-plugins)

## Requisitos do Sistema

Antes de iniciar a instalação, certifique-se de que seu sistema atende aos seguintes requisitos:

- **Sistema Operacional:**
  - Windows Server 2019 ou superior
  - Ubuntu 20.04 LTS ou superior
- **Hardware:**
  - CPU: Quad-core 3.0 GHz ou superior
  - RAM: 16 GB mínimo (32 GB recomendado)
  - Armazenamento: 100 GB de espaço livre em SSD
- **Software:**
  - Node.js 14.x ou superior
  - PostgreSQL 13 ou superior
  - Git

## Instalação no Windows

1. **Preparação do Ambiente:**
   - Instale o Node.js: Baixe e execute o instalador de https://nodejs.org/
   - Instale o PostgreSQL: Baixe e execute o instalador de https://www.postgresql.org/download/windows/
   - Instale o Git: Baixe e execute o instalador de https://git-scm.com/download/win

2. **Clone o Repositório:**
   Abra o PowerShell e execute:
   \`\`\`powershell
   git clone https://github.com/seu-repositorio/3d-network-monitor.git
   cd 3d-network-monitor
   \`\`\`

## Instalação de Plugins

O 3D Network Monitor suporta a instalação de plugins para estender sua funcionalidade. Para instalar um plugin:

1. **Baixe o plugin:** Obtenha o arquivo do plugin (geralmente um arquivo `.zip` ou `.tar.gz`).
2. **Extraia o plugin:** Extraia o arquivo do plugin para o diretório `plugins` na raiz da instalação do 3D Network Monitor.
3. **Reinicie o sistema:** Reinicie o 3D Network Monitor para que o plugin seja carregado.

**Observações:**

- Certifique-se de que o plugin seja compatível com a versão do 3D Network Monitor que você está usando.
- Consulte a documentação do plugin para obter instruções específicas de instalação e configuração.

