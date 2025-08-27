# SuburbMates MVP - Phoenix Build

A modern, accessible, and premium local services marketplace connecting Melbourne residents with trusted professionals in their suburbs.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- A Supabase account and project
- Git installed

### Installation

1. **Clone or download this project**
   ```bash
   # If using Git
   git clone <your-repo-url>
   cd suburbmates-phoenix
   
   # Or extract the ZIP file and navigate to the folder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your Supabase credentials:
   ```env
   DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@YOUR_HOST.supabase.co:6543/postgres?pgbouncer=true"
   NEXT_PUBLIC_SUPABASE_URL="https://YOUR_PROJECT.supabase.co"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_ANON_KEY"
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev --name init
   npx prisma db seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Architecture

### Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Database**: PostgreSQL (via Supabase)
- **ORM**: Prisma
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

### Design System

The application uses a token-based design system with:

- **Colors**: Navy primary (#0A2540), Amber accent (#B76E00), Light background (#e8e8e8)
- **Typography**: Inter font with responsive scaling
- **Components**: Reusable UI components with consistent styling
- **Animations**: Subtle micro-interactions and loading states
- **Accessibility**: WCAG 2.1 AA compliant

### Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout with navigation
│   ├── page.tsx        # Homepage
│   ├── search/         # Search results page
│   └── fonts.ts        # Font configuration
├── components/         # React components
│   ├── ui/            # Base UI components
│   ├── BusinessCard.tsx
│   ├── SearchForm.tsx
│   └── ...
├── lib/               # Utilities and configurations
│   ├── db.ts         # Prisma client
│   ├── tokens.ts     # Design tokens
│   └── utils.ts      # Helper functions
└── styles/
    └── globals.css   # Global styles and Tailwind
```

## 🎨 Features

### Core Features

- **Smart Search**: Find services by category and suburb
- **Business Listings**: Detailed business profiles with contact information
- **Responsive Design**: Works perfectly on desktop and mobile
- **Accessibility**: Full keyboard navigation and screen reader support
- **Performance**: Optimized loading with skeleton states and animations

### UI/UX Features

- **Modern Animations**: Smooth transitions and micro-interactions
- **Glassmorphism**: Frosted glass effects on navigation
- **Aurora Background**: Subtle animated gradient backgrounds
- **Progressive Loading**: Skeleton loaders and Suspense boundaries
- **Focus Management**: Clear focus indicators for accessibility

### Technical Features

- **Server Components**: Fast initial page loads
- **Streaming**: Progressive page rendering
- **Type Safety**: Full TypeScript coverage
- **Database Relations**: Proper foreign key relationships
- **SEO Optimized**: Meta tags and structured data ready

## 🗄️ Database Schema

The application uses a clean, normalized database schema:

```sql
Suburb (id, name, postcode, state)
Category (id, name, slug, description)
Business (id, name, description, website, phone, email, abn, verified, featured, suburb_id, category_id)
User (id, email, name, avatar, role)
```

## 🚀 Deployment

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New... → Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Add Environment Variables**
   In Vercel project settings, add:
   - `DATABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. **Deploy**
   Click "Deploy" and your site will be live!

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run db:migrate   # Run database migrations
npm run db:seed      # Seed database with sample data
npm run db:studio    # Open Prisma Studio
```

### Adding New Features

1. **New Components**: Add to `src/components/`
2. **New Pages**: Add to `src/app/`
3. **Database Changes**: Update `prisma/schema.prisma` and run migrations
4. **Styling**: Use Tailwind classes or extend the design tokens in `src/lib/tokens.ts`

## 🎯 Next Steps

This MVP provides a solid foundation. Consider adding:

- **User Authentication**: Login/signup for users and businesses
- **Reviews & Ratings**: Customer feedback system
- **Messaging**: In-app communication between users and businesses
- **Payment Integration**: Stripe for booking and payments
- **Admin Dashboard**: Business management and moderation tools
- **Mobile App**: React Native version
- **Advanced Search**: Filters, sorting, and map integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [troubleshooting section](#troubleshooting)
2. Search existing GitHub issues
3. Create a new issue with detailed information

### Troubleshooting

**Database connection issues:**
- Verify your Supabase credentials in `.env.local`
- Ensure your Supabase project is active
- Check that the database URL includes `?pgbouncer=true`

**Build errors:**
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run lint`

**Styling issues:**
- Ensure Tailwind is properly configured
- Check that `globals.css` imports are correct
- Verify design tokens in `src/lib/tokens.ts`

---

Built with ❤️ for the Melbourne community

