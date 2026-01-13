# Task Tracker CLI

Uma aplicação leve de gerenciamento de tarefas via linha de comando, construída com TypeScript. Desenvolvida como projeto de aprendizado para praticar operações com sistema de arquivos, manipulação de dados JSON e fundamentos de desenvolvimento CLI.

> **Desafio do Projeto**: Este projeto faz parte do desafio [roadmap.sh Task Tracker](https://roadmap.sh/projects/task-tracker).

## Funcionalidades

- **Adicionar Tarefas**: Crie novas tarefas com geração automática de ID
- **Atualizar Tarefas**: Modifique descrições de tarefas instantaneamente
- **Deletar Tarefas**: Remova tarefas que não precisa mais
- **Gerenciamento de Status**: Acompanhe tarefas através de três estados:
  - `todo` - Tarefas pendentes
  - `in-progress` - Tarefas em andamento
  - `done` - Tarefas concluídas
- **Listar & Filtrar**: Visualize todas as tarefas ou filtre por status
- **Armazenamento JSON**: Dados persistentes em arquivo JSON local
- **Timestamps**: Timestamps automáticos de criação e atualização para cada tarefa

## Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn

## Instalação & Configuração

1. **Clone o repositório:**
```bash
git clone https://github.com/wagnrrt/task-tracker-cli.git
cd task-tracker-cli
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Compile o projeto TypeScript:**
```bash
npm run build
```
   Isso compila os arquivos TypeScript de `src/` para JavaScript no diretório `dist/`.

4. **Verifique a instalação:**
```bash
node dist/index.js list
```
   Você deverá ver uma lista de tarefas vazia ou tarefas existentes caso o arquivo de dados já exista.

## Uso

Execute a CLI usando Node.js:

### Adicionar uma nova tarefa
```bash
node dist/index.js add "Comprar mantimentos"
# Saída: Task added successfully
```

### Atualizar uma tarefa
```bash
node dist/index.js update (ID) "Comprar mantimentos e cozinhar o jantar"
# Saída: Task updated successfully
```

### Deletar uma tarefa
```bash
node dist/index.js delete (ID)
# Saída: Task deleted successfully
```

### Marcar status da tarefa
```bash
# Marcar como em andamento
node dist/index.js mark-in-progress (ID)

# Marcar como concluída
node dist/index.js mark-done (ID)
```

### Listar tarefas
```bash
# Listar todas as tarefas
node dist/index.js list

# Listar por status
node dist/index.js list done
node dist/index.js list todo
node dist/index.js list in-progress
```

## Formato dos Dados

As tarefas são armazenadas em `data/tasks.json` com a seguinte estrutura:

```json
[
  {
    "id": AO3,
    "description": "Comprar mantimentos",
    "status": "todo",
    "createdAt": "2025-01-13T10:30:00.000Z",
    "updatedAt": "2025-01-13T10:30:00.000Z"
  }
]
```

## Desenvolvimento

Este projeto foi construído como parte do desafio **[roadmap.sh Task Tracker](https://roadmap.sh/projects/task-tracker)**. Serve como exercício prático em:

- Fundamentos de TypeScript
- Operações com sistema de arquivos no Node.js
- Manipulação de dados JSON
- Parsing de argumentos de linha de comando
- Construção de aplicações CLI

Os requisitos do desafio incluem:
- Adicionar, atualizar e deletar tarefas
- Marcar tarefas como em andamento ou concluídas
- Listar todas as tarefas ou filtrar por status
- Armazenar tarefas em arquivo JSON
- Tratar inputs do usuário via argumentos de linha de comando

### Scripts

- `npm run build` - Compila TypeScript para JavaScript
- `npm start` - Executa a aplicação compilada
- `npm run dev` - Executa em modo de desenvolvimento com ts-node

## Tecnologias

- **TypeScript**: Desenvolvimento JavaScript com tipagem segura
- **Node.js**: Runtime JavaScript
- **File System (fs)**: Módulo nativo do Node.js para operações de arquivo

## Solução de Problemas

### Erro "Cannot find module"
Certifique-se de ter compilado o projeto primeiro:
```bash
npm run build
```

### Tarefas não estão persistindo
A aplicação cria um arquivo `data/tasks.json` automaticamente. Verifique se você tem permissões de escrita no diretório do projeto.

### Erros de compilação TypeScript
Verifique se você tem TypeScript instalado:
```bash
npm list typescript
```
Se não estiver instalado, execute `npm install` novamente.

## Aprendizados

Através deste projeto, pratiquei:
- Trabalhar com o sistema de arquivos no Node.js
- Lidar com persistência de dados JSON
- Fazer parsing de argumentos de linha de comando
- Configuração e compilação TypeScript
- Tratamento de erros e validação
- Construir interfaces CLI amigáveis

## Contribuindo

Este é um projeto de aprendizado, mas contribuições são bem-vindas! Se encontrar bugs ou tiver sugestões:

1. Faça um fork do repositório
2. Crie uma branch de feature (`git checkout -b feature/melhoria`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/melhoria`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT.  
Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

## Autor

Wagner - [@wagnrrt](https://github.com/wagnrrt)

---

**Nota**: Este é um projeto experimental destinado exclusivamente para aprendizado e prática. Sinta-se livre para fazer fork, experimentar e aprender com ele!
