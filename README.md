# Feedback Widget - Front-End

> Projeto criado durante o evento NLW Return da RocketSeat

## 👨‍💻 Tecnologias e bibliotecas utilizadas 👩‍💻

- Javascript / Typescript : Linguagem programação
- Vite : Ferramenta de criação de Front-end
- React : Biblioteca criação de interfaces
- Tailwind CSS : Framework css
- Headless UI : Componentes de UI sem estilos e completamente acessíveis (acessibilidade)
- Autenticação OAuth2 : Login social com Github ou Google ou Facebook
- React Context API : Autenticação e Temas
- Responsividade

### 📚 bibliotecas adicionais 🗃️

- axios : Cliente HTTP baseado em promessa para o navegador e node.js
- html2canvas : Capturas de tela com JavaScript
- phosphor-react : Uma família de ícones limpa e amigável para React
- query-string : Utilitário de strings de consulta de URL
- react-paginate : Um componente ReactJS para criação de paginação
- react-router-dom : Roteamento declarativo para aplicativos Web React
- react-toastify : Notificação para React facilitada

## 📃 Guia 📖

- Criando o projeto com Vite:

        npm create vite@latest
        Ok to proceed? y
        Select a framework: react
        Select a variant: react-ts

        yarn install or npm install

- Configurando o tailwind CSS (tailwindcss postcss autoprefixer)

        yarn add -D tailwindcss postcss autoprefixer

        npx tailwindcss init -p

        editar o arquivo: tailwind.config.js
        substituindo content por: content: ["./src/**/*.tsx"],

        criar arquivo global.css
        adicionar nele:
          @tailwind base;
          @tailwind components;
          @tailwind utilities;

        importar o arquivo global.css no main.tsx

- Phosphor Icons (phosphor-react)

        Biblioteca de ícones

- Popover do Headless UI (@headlessui/react)

        Utilizamos para fornecer acessibilidade ao componente Widget ao abrir e fechar
        Ele adiciona os atributos aria aos componentes HTML e a funcionalidade de abrir e fechar
        Link para documentação do Popover: https://headlessui.dev/react/popover

- Tailwind CSS Forms (@tailwindcss/forms)

        Plugin do Tailwind de estilização de formulários

- Tailwind Scrollbar (tailwind-scrollbar)

        Plugin para adicionar ao Tailwind estilização do scrollbar

- HTML 2 Canvas (html2canvas)

        Biblioteca que utilizamos para tirar screenshot da página do browser

- Usar font Inter do Google fonts

        no arquivo global.css adicionar no começo:
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Lato:ital,wght@0,400;0,700;1,400&family=Rubik+Beastly&display=swap');
        e adicionar ao body @apply font-Inter

        no arquivo tailwind.config.js adicionar no theme.extend:
        fontFamily: { Inter: ['Inter'], },

- Usar dark mode manual com Tailwind CSS

        no arquivo tailwind.config.js adicionar no module.exports:
        darkMode: 'class',

        na tag html precisa adicionar a classe dark exemplo:
        modo dark: <html lang="en" class="dark">...</html>
        modo light: <html lang="en">...</html>

        nas estilizações adicionar a variante dark exemplo:
        <div class="bg-white dark:bg-zinc-900">...</div>
