# Portfolio v2

Personal portfolio built with Next.js and TypeScript

## 🛠️ Tech Stack

- **Next.js 13** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Inter Font** - Main font
- **Nodemailer** - Email sending
- **next-themes** - Theme management (Dark/Light)

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [amirhk.info](amirhk.info) to view the portfolio.

### Build for production

```bash
npm run build
npm start
```

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file:

```env
NODEMAILER_USER=amirhoseinkoosha954@gmail.com
NODEMAILER_PASS=your-app-password
```

### Nodemailer Setup

1. Go to your Google Account
2. Security → 2-Step Verification → App passwords
3. Create a new App password
4. Add it to `.env.local`

### Site Information

Update site information in `/src/data/siteMetaData.mjs`.

## 🎨 Themes

Pre-made themes are available in `src/styles/theme-expamples.css`. To create a custom theme, edit CSS variables in `globals.css`.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linter
- `npm run sitemap` - Generate sitemap.xml
- `npm run format:fix` - Format code

## 📄 License

This project is open source and free to use as a template.
