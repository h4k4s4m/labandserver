# Lab & Server Website Theme Guide

This document captures the design system, components, and visual identity of the Lab & Server website to ensure consistency across all pages.

## Brand Identity

### Logo
- **Format**: Text-based logo with an accent symbol
- **Text**: "Lab&Server" with "&" highlighted in the primary blue color
- **Font**: Montserrat Bold with letter-spacing: -0.5px
- **Usage**: Consistent placement in the header and footer of all pages

## Color Palette

### Primary Colors
- **Primary Blue**: `#1E88E5` - Main brand color, used for buttons, links, and accents
- **Secondary Blue**: `#0D47A1` - Darker blue used for hover states and footer background
- **Accent Blue**: `#64B5F6` - Lighter blue used for subtle highlights and secondary elements

### Neutral Colors
- **Background White**: `#FFFFFF` - Main background color
- **Off-White**: `#F5F7FA` - Secondary background for cards and sections
- **Text Dark**: `#333333` - Primary text color
- **Text Light**: `#757575` - Secondary text color for less emphasis
- **Border Light**: `#E0E0E0` - Used for dividers and borders
- **Shadow Color**: `rgba(0, 0, 0, 0.1)` - Used for box shadows

## Typography

### Font Families
- **Heading Font**: 'Montserrat', sans-serif - Used for all headings and navigation
- **Body Font**: 'Open Sans', sans-serif - Used for body text and paragraphs
- **Code Font**: monospace - Used for code snippets

### Font Sizes
- **H1**: 2.5rem (3rem on hero sections)
- **H2**: 2rem
- **H3**: 1.5rem
- **H4**: 1.25rem
- **Body**: 1rem (16px)
- **Small**: 0.9rem
- **Lead Paragraph**: 1.25rem

### Font Weights
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

### Line Heights
- **Headings**: 1.2
- **Body Text**: 1.6

## Spacing System

### Variables
- **--spacing-xs**: 0.25rem (4px)
- **--spacing-sm**: 0.5rem (8px)
- **--spacing-md**: 1rem (16px)
- **--spacing-lg**: 2rem (32px)
- **--spacing-xl**: 3rem (48px)
- **--spacing-xxl**: 5rem (80px)

### Container
- **Max Width**: 1200px
- **Padding**: 1.5rem on each side

## Components

### Buttons

#### Base Button
- Padding: 0.75rem 1.5rem
- Border-radius: 8px (--border-radius-md)
- Font-weight: 600
- Font-family: Montserrat
- Transition: all 0.2s ease

#### Button Variants
1. **Primary Button**
   - Background: var(--primary-blue)
   - Color: white
   - Box-shadow: 0 4px 6px rgba(30, 136, 229, 0.25)
   - Hover: Darker background, slight elevation

2. **Secondary Button**
   - Background: white
   - Color: var(--primary-blue)
   - Border: 2px solid var(--primary-blue)
   - Hover: Light background, darker border

3. **Outline Button**
   - Background: transparent
   - Color: var(--primary-blue)
   - Border: 1px solid var(--border-light)
   - Hover: Light blue background, blue border

4. **Small Button**
   - Padding: 0.5rem 1rem
   - Font-size: 0.875rem

### Cards

#### Standard Card
- Background: white
- Border-radius: 8px (--border-radius-md)
- Box-shadow: 0 5px 15px var(--shadow-color)
- Transition: transform 0.3s ease, box-shadow 0.3s ease
- Hover: Slight elevation (translateY(-5px))

#### Card Variants
1. **Info Card**
   - Display: flex with icon
   - Background: var(--off-white)
   - Padding: var(--spacing-lg)

2. **User Type Card**
   - Text-align: center
   - Icon at top
   - Padding: var(--spacing-lg)

3. **Featured Card**
   - Horizontal layout with image/icon on left
   - Background: var(--off-white)

4. **Software Card**
   - Icon/image at top
   - Tags for categorization
   - Link at bottom

### Navigation

#### Main Navigation
- Links with hover and active states
- Active state includes underline
- Mobile toggle with hamburger icon
- Responsive dropdown on mobile

### Hero Section
- Background: Linear gradient of primary and secondary blue
- White text
- Two-column layout (content and image)
- Wave SVG at bottom for visual interest
- Responsive: stacks to single column on mobile

### Section Headers
- Centered text
- Subtitle in lighter color
- Consistent margin (var(--spacing-xl))

## Responsive Breakpoints

### Breakpoint System
- **Large**: 992px and above (desktop)
- **Medium**: 768px to 991px (tablet)
- **Small**: 576px to 767px (large mobile)
- **Extra Small**: 575px and below (small mobile)

### Key Responsive Behaviors
- Mobile-first approach
- Grid layouts collapse to fewer columns on smaller screens
- Hero section image hidden on mobile
- Navigation converts to hamburger menu below 768px
- Footer columns stack on smaller screens
- Button groups stack vertically on smallest screens

## Animations & Transitions

### Transition Speeds
- **Fast**: 0.2s ease
- **Normal**: 0.3s ease
- **Slow**: 0.5s ease

### Common Animations
- Hover effects on cards (translateY)
- Button hover effects (background color, shadow)
- Link hover effects (color change)
- Mobile menu toggle
- Scroll animations for cards and sections

## Icons

### Icon System
- Font Awesome 6.4.0 for all icons
- Consistent sizing within contexts
- Primary blue color for standalone icons
- White for icons on colored backgrounds

## Forms & Interactive Elements

### Form Elements
- Consistent padding and border-radius
- Focus states with primary blue outline
- Error states with appropriate messaging
- Grouped form elements with consistent spacing

## Implementation Guidelines

### CSS Structure
- CSS custom properties for theming
- Organized sections with comments
- Mobile-first media queries
- Component-based approach

### JavaScript Interactions
- Smooth scrolling for anchor links
- Mobile menu toggle
- Active state for current page in navigation
- Scroll animations for elements

### New Page Development
1. Use the existing HTML structure from similar pages as templates
2. Maintain consistent header and footer across all pages
3. Utilize the defined components and spacing system
4. Follow the responsive design patterns
5. Test across all breakpoints

---

This theme guide should be referenced when developing new pages or components to ensure visual consistency across the Lab & Server website.