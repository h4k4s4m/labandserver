"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-accent border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Homelab Guide
          </Link>
          <div className="flex space-x-4">
            <Link 
              href="/hardware"
              className={`px-3 py-2 rounded-md ${
                pathname === '/hardware' 
                  ? 'bg-primary text-white' 
                  : 'text-secondary hover:text-primary'
              }`}
            >
              Hardware
            </Link>
            <Link 
              href="/software"
              className={`px-3 py-2 rounded-md ${
                pathname === '/software' 
                  ? 'bg-primary text-white' 
                  : 'text-secondary hover:text-primary'
              }`}
            >
              Software
            </Link>
            <Link 
              href="/guides"
              className={`px-3 py-2 rounded-md ${
                pathname === '/guides' 
                  ? 'bg-primary text-white' 
                  : 'text-secondary hover:text-primary'
              }`}
            >
              Guides
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 