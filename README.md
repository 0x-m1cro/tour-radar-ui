# TourRadar UI Clone

A pixel-perfect, production-grade UI clone of TourRadar.com built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion.

![Homepage](https://github.com/user-attachments/assets/f48598f4-865d-49d5-8b5c-80cedea402b7)

## 🚀 Features

- ✅ **Responsive Design** - Mobile-first design that works on all devices (375px+)
- ✅ **Modern Stack** - Next.js 15 App Router, TypeScript, TailwindCSS v4
- ✅ **Smooth Animations** - Framer Motion for fluid transitions and interactions
- ✅ **Component-Based** - Modular, reusable React components
- ✅ **Type-Safe** - Full TypeScript coverage for better development experience
- ✅ **SEO Optimized** - Next.js Metadata API for optimal search engine visibility
- ✅ **Accessibility** - WAI-ARIA compliant components

## 📁 Project Structure

```
tour-radar-ui/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Homepage
│   ├── home/                # Homepage components
│   ├── category/[category]/ # Dynamic category pages
│   ├── tour/[id]/          # Dynamic tour detail pages
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── terms/              # Terms of Service
│   └── privacy/            # Privacy Policy
├── components/              # Reusable UI components
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── TourCard.tsx        # Tour listing card
│   └── Filters.tsx         # Category filters
├── layouts/                 # Layout components
│   └── MainLayout.tsx      # Main site layout
├── lib/                     # Utilities and data
│   └── mockData.ts         # Mock tour data
├── mcp-scripts/            # Playwright capture scripts
│   └── playwright-capture.ts
└── public/                  # Static assets
```

## 🎨 Pages Implemented

### ✅ Homepage
- Hero section with search functionality
- Popular destinations grid
- Tour categories showcase
- Featured tours carousel
- Customer testimonials
- Trust indicators and statistics
- Newsletter signup

![Category Page](https://github.com/user-attachments/assets/12abb977-6138-4b18-b5e3-91ad3ccafadf)

### ✅ Category/Listing Pages
- Advanced filtering system (price, rating, duration, difficulty)
- Grid/list view toggle
- Sorting options
- Responsive filters sidebar
- Pagination

![Tour Detail](https://github.com/user-attachments/assets/34b1a5c5-b88d-4711-a499-4213c03a965c)

### ✅ Tour Detail Page
- Image carousel placeholder
- Comprehensive tour information
- Day-by-day itinerary
- Included/excluded items
- Reviews section
- Sticky booking panel
- Tour operator information

### ✅ Utility Pages
- About Us
- Contact (with form)
- Terms of Service
- Privacy Policy

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [TailwindCSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Testing:** [Playwright](https://playwright.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/0x-m1cro/tour-radar-ui.git
cd tour-radar-ui
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Color Palette

- **Primary:** #FF6B35 (Orange)
- **Primary Dark:** #E55A2B
- **Secondary:** #004E89 (Blue)
- **Accent:** #00B4D8 (Cyan)

### Typography

System font stack for optimal performance and native feel across platforms.

### Spacing & Layout

Following a consistent 4px grid system for spacing and alignment.

## 🧪 Playwright MCP Integration

The project includes Playwright scripts for automated screenshot capture and DOM analysis.

### Running Capture Script

```bash
npx tsx mcp-scripts/playwright-capture.ts
```

This will:
- Capture full-page screenshots of all major pages
- Generate mobile screenshots
- Create an HTML report
- Save DOM snapshots for analysis

## 📱 Responsive Breakpoints

- **Mobile:** 375px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px+

## 🎯 Key Features Implemented

### Header
- Sticky navigation
- Dropdown menus with hover effects
- Mobile hamburger menu with slide-in animation
- Responsive design

### Tour Cards
- Hover animations
- Rating display
- Price formatting
- Category badges
- Responsive grid layout

### Filters
- Price range slider
- Multi-select checkboxes
- Rating filter
- Mobile-optimized overlay
- Real-time filtering

### Animations
- Page transitions
- Card hover effects
- Smooth scrolling
- Menu animations
- Loading states

## 🔧 Customization

### Adding New Tours

Edit `lib/mockData.ts` to add or modify tour data:

```typescript
export const mockTours: Tour[] = [
  {
    id: '7',
    title: 'Your New Tour',
    // ... other properties
  }
];
```

### Styling

The project uses TailwindCSS with custom theme extensions in `app/globals.css`.

## 📄 License

This is a UI clone project for educational and reference purposes.

## 🙏 Acknowledgments

- Design inspiration from TourRadar.com
- Built with modern web technologies
- Optimized for performance and accessibility
