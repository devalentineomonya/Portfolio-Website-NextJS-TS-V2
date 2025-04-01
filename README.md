# Portfolio Website - Next.js & TypeScript

![Next.js](https://img.shields.io/badge/Next.js-15.2.0-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

A modern, performant, and responsive portfolio website built with **Next.js 13**, **TypeScript**, and **Tailwind CSS**. Designed to showcase professional work, skills, and projects with optimal SEO and accessibility.

![Portfolio Preview](./public/screenshot.png)

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Dark/Light Mode**: Toggle between themes with persistent user preference.
- **Project Showcase**: Filterable grid layout for projects with dynamic routing.
- **Skills Section**: Interactive tech stack display with progress indicators.
- **Contact Form**: Integrated with Formspree/EmailJS for message handling.
- **SEO Optimization**: Metadata, Open Graph tags, and dynamic sitemap.
- **Performance**: 90+ Lighthouse scores (uses Next.js Image, code splitting).
- **Animations**: Smooth transitions with Framer Motion.
- **Markdown Blog Support**: (Optional) MDX-based blog system via Contentlayer.

## Technologies

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **Animation**: Framer Motion
- **Icons**: React Icons
- **Form Handling**: React Hook Form + Formspree/EmailJS
- **Content**: (Optional) Contentlayer for MDX
- **Deployment**: Vercel

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/devalentineomonya/Portfolio-Website-NextJS-TS-V2.git
   cd Portfolio-Website-NextJS-TS-V2
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```


3. **Run Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Visit `http://localhost:3000` or `127.0.0.1:3000`

## Configuration

### Personalize Content
Edit the data files in `src/data/`:
- `personalInfo.ts`: Update name, bio, social links
- `projects.ts`: Add/remove projects with images in `public/images/projects/`
- `skills.ts`: Modify skills list with proficiency levels

```ts
// Example: src/data/projects.ts
export const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    tags: ["React", "TypeScript"],
    image: "/images/projects/project-1.jpg",
    repo: "https://github.com/...",
    demo: "https://live-demo.com"
  }
]
```

### Styling
- Modify global styles in `src/styles/globals.css`
- Use Tailwind classes directly in components
- Add custom colors in `tailwind.config.js`

### Theming
Toggle dark mode logic in `src/components/ThemeToggle.tsx`

## Deployment

### Vercel (Recommended)
1. Push your code to a GitHub/GitLab/Bitbucket repository
2. Import the repo on [Vercel](https://vercel.com/new)
3. Add environment variables during setup
4. Deploy! 🚀

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdevalentineomonya%2FPortfolio-Website-NextJS-TS-V2)

### Other Platforms
Adjust `next.config.js` if needed for static export:
```bash
npm run build && npm run export
```

## Contributing

Contributions are welcome! Follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for details.

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation)
