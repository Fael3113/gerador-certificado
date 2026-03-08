# Gerador de Certificado

Aplicação web desenvolvida com Angular para geração de certificados digitais. O projeto foi construído como estudo prático do framework Angular, utilizando Bootstrap para estilização e implantado via Netlify.

## Tecnologias

- [Angular](https://angular.dev/) 21.1.5
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Netlify](https://www.netlify.com/) (deploy)

## Pré-requisitos

- Node.js (versão recomendada: 18 ou superior)
- Angular CLI instalado globalmente

```bash
npm install -g @angular/cli
```

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Fael3113/gerador-certificado.git
cd gerador-certificado
npm install
```

## Executando o projeto

### Servidor de desenvolvimento

```bash
ng serve
```

Acesse `http://localhost:4200/` no navegador. A aplicação recarrega automaticamente ao detectar alterações nos arquivos fonte.

### Build de produção

```bash
ng build
```

Os artefatos de build serão gerados no diretório `dist/`. A build de produção aplica otimizações de performance automaticamente.

## Testes

### Testes unitários

```bash
ng test
```

Os testes unitários são executados com o [Vitest](https://vitest.dev/).

### Testes end-to-end

```bash
ng e2e
```

## Estrutura do projeto

```
gerador-certificado/
├── public/
├── src/
│   └── app/
├── angular.json
├── netlify.toml
├── package.json
└── tsconfig.json
```

## Deploy

O projeto está configurado para deploy contínuo via Netlify. O arquivo `netlify.toml` contém as configurações necessárias para o ambiente de produção.

## Licença

Distribuído sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
