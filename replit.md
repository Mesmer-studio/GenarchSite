# GenArch Labs - Corporate Website with Complaint System

## Overview

This is a full-stack web application for GenArch Labs, a specialized division of GenArch Technologies focused on UX testing services. GenArch Labs helps startups and solo developers test their applications in environments designed to explore user experience, identify limitations and capabilities, and provide smart upgrade recommendations both pre and post launch. The application features a modern corporate website with an integrated complaint submission system. Built with React frontend and Express backend, it uses Drizzle ORM for database operations with PostgreSQL.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: In-memory storage for development (expandable to PostgreSQL sessions)

### Development Setup
- **Dev Server**: Vite development server with Express backend
- **Hot Reload**: Integrated Vite HMR with backend API
- **Build Process**: Separate builds for client (Vite) and server (esbuild)

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Complaints Table**: Complaint submission system with:
  - Contact information (name, email)
  - Categorization (technical, billing, service, etc.)
  - Priority levels (low, medium, high, critical)
  - Status tracking (open by default)
  - Timestamps for creation

### API Endpoints
- `POST /api/complaints` - Submit new complaints with validation
- `GET /api/complaints` - Retrieve all complaints (admin functionality)
- `GET /api/complaints/:id` - Get specific complaint details

### Frontend Pages
- **Home**: Corporate landing page with hero section, services, and company info
- **Complaints**: Customer support form for submitting complaints
- **404**: Error page for unmatched routes

### UI Components
- Responsive navigation with mobile menu
- Professional footer with contact information and social links
- Form components with validation and error handling
- Toast notifications for user feedback
- Modern card-based layouts

## Data Flow

### Complaint Submission Flow
1. User fills out complaint form on `/complaints` page
2. Form validation using Zod schema on client-side
3. API request to `POST /api/complaints` with form data
4. Server validates data using shared schema
5. Complaint stored in database via Drizzle ORM
6. Success response with unique complaint ID
7. Client shows success toast and resets form

### Data Validation
- Shared Zod schemas between client and server in `/shared/schema.ts`
- Email validation for contact information
- Minimum character requirements for descriptions
- Enum validation for categories and priorities

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, ReactDOM, React Router via Wouter)
- Express.js for backend API
- Drizzle ORM with Neon Database serverless driver

### UI and Styling
- Tailwind CSS for utility-first styling
- Radix UI primitives for accessible components
- Lucide React for consistent iconography
- shadcn/ui component system

### Development Tools
- TypeScript for type safety
- Vite for fast development and building
- ESBuild for server bundling
- PostCSS for CSS processing

### Database and Storage
- PostgreSQL as primary database
- Neon Database for serverless PostgreSQL hosting
- Drizzle Kit for database migrations and schema management

## Deployment Strategy

### Build Process
1. **Client Build**: Vite builds React app to `dist/public`
2. **Server Build**: ESBuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `npm run db:push`

### Environment Configuration
- Development: Local development with Vite dev server
- Production: Compiled Express server serves static files and API
- Database URL required via `DATABASE_URL` environment variable

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database access
- Environment variables for database connection
- Static file serving capability

### Development vs Production
- Development: Vite middleware handles client assets with HMR
- Production: Express serves pre-built static files from `dist/public`
- Database: Uses Neon serverless PostgreSQL in both environments