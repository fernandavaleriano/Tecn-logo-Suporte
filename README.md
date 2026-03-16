<div align="center"> <img src="img/Logotipo para empresa de representações simples em branco e preto.png" alt="Suporte Tecnológico Logo" width="200"/>

# Suporte Tecnológico | Computadores & Celulares

Landing page institucional desenvolvida para divulgação de serviços de assistência técnica,
focada em clareza de informação, conversão via WhatsApp e atendimento remoto.

## 🖥️ Preview
| Desktop |
|--------|

<div align="center"> <img src="prints/web (1).jpg" alt="Suporte Tecnológico Logo" width="200"/>

<div align="center"> <img src="prints/web (2).jpg" alt="Suporte Tecnológico Logo" width="200"/>

<div align="center"> <img src="prints/web (3).jpg" alt="Suporte Tecnológico Logo" width="200"/>

| Mobile |
|--------|

<div align="center"> <img src="prints/celular (1).jpg" alt="Suporte Tecnológico Logo" width="200"/>


<div align="center"> <img src="prints/celular (2).jpg" alt="Suporte Tecnológico Logo" width="200"/>

<div align="center"> <img src="prints/celular (3).jpg" alt="Suporte Tecnológico Logo" width="200"/>

| :--- | :--- |
**[🌐 Ver site ao vivo](https://suporte-tecnologico-web.vercel.app/)**


## 🛠️ Quick Stack

| Categoria | Tecnologias & Performance |
| :--- | :--- |
| **Frontend** | HTML5 Semântico, CSS3 (Flexbox, Animations, Responsive Design) |
| **Interatividade** | JavaScript (Animação de rodapé via **Intersection Observer**) |
| **Deploy/CI-CD** | GitHub & Vercel (Deploy automático via branch `main`) |

---

## Engenharia de Interface
 
### 🖼️ Hero Section com Identidade Visual
Seção inicial estruturada com layout de duas colunas — conteúdo textual à esquerda e logotipo circular à direita — criando um equilíbrio visual entre apresentação da marca e chamada para ação. O contraste entre tipografia preta e elementos verdes (`#1aae52`) reforça a identidade tecnológica e profissional da marca.
 
### 🎨 Seção "Saiba Mais" com Background Imersivo
Implementação de imagem de fundo com `background-blend-mode: overlay` e camada escura (`rgba(0,0,0,0.4)`), criando profundidade visual sem comprometer a legibilidade do texto. A técnica posiciona o conteúdo de forma elegante sobre a imagem, transmitindo credibilidade e sofisticação.
 
### 🛠️ Cardápio de Serviços em Grid de 3 Colunas
Organização dos serviços em três categorias distintas — Computadores & Notebooks, Celulares e WhatsApp Business — dispostos em grid flexível com `display: flex` e `gap` generoso. A hierarquia visual com títulos em caixa alta e separadores garante escaneabilidade rápida pelo usuário.
 
### ✨ Animação de Entrada do Rodapé via Intersection Observer
O rodapé utiliza a API nativa `IntersectionObserver` do JavaScript para detectar quando o elemento entra na viewport, aplicando uma transição suave de `opacity` e `translateY`. Esta técnica elimina a dependência de bibliotecas externas, mantendo o projeto leve e performático.
 
### 📲 Otimização de Conversão (Lead Gen)
Integração direta com a API do WhatsApp através de links parametrizados (`wa.me`). CTAs estrategicamente posicionados na hero section e no rodapé maximizam os pontos de conversão ao longo da jornada do usuário na página.
 
### 📍 Integração com Google Maps
Link direto para a localização real do estabelecimento no Google Maps, permitindo que o cliente encontre o endereço com um clique, reduzindo a fricção no processo de agendamento presencial.
 
### 📱 Mobile First & Responsividade
Layout 100% responsivo com breakpoint em `768px`. No mobile, a hero section inverte a ordem dos elementos (`column-reverse`), exibindo o logotipo acima do texto para melhor hierarquia visual. O grid de serviços empilha as colunas verticalmente, garantindo legibilidade em qualquer tamanho de tela.
 
---
 
## Design System
 
**Identidade Visual:**
Logo criada do zero — composição tipográfica em preto e branco com estética minimalista e profissional, transmitindo confiança e seriedade para o segmento de tecnologia.
 
**Tipografia:**
- `Montserrat` — títulos e destaques (impacto e modernidade)
- `Outfit` — textos descritivos (leveza e legibilidade)
 
**Paleta de Cores:**
- Fundo principal: `#ffffff` / `#000000` — contraste máximo para clareza
- Verde tecnológico: `#1aae52` / `#2ecc71` — identidade da marca e CTAs
- Seção de serviços: `#1a2b16` — verde escuro que remete a tecnologia e confiança
- Rodapé: `#000000` — autoridade e sofisticação
 
**Favicon Customizado:**
Implementação de favicon com a identidade da marca para reconhecimento em múltiplas abas do navegador.
 
---
 
## 📂 Estrutura do Projeto
 
```
tecnologo-suporte/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    ├── Logotipo.png
    └── fundo-teclado-clean.jpg.png
```
 
---
 
## 🚀 Como Executar o Projeto
 
```bash
# Clone o repositório
git clone https://github.com/fernandavaleriano/tecnologo-suporte.git
 
# Acesse a pasta
cd tecnologo-suporte
```
 
Abra o arquivo `index.html` em qualquer navegador moderno.
Para produção, o projeto está configurado para deploy automático via branch `main`.
 
> Nenhuma dependência ou instalação necessária. Projeto 100% em HTML, CSS e JS puro.
 
---
 
## 📩 Contato

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/fernandavaleriano)

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5527988796796?text=Olá%20Fernanda!%20Vim%20pelo%20seu%20portfólio%20e%20tenho%20interesse%20nos%20seus%20serviços.)

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:fernandaramosvaleriano@gmail.com)

---
Feito por **Fernanda Valeriano**
