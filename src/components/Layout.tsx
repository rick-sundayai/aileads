import React from 'react';
import Link from 'next/link';
import Auth from './Auth';
import { useUser } from '@supabase/auth-helpers-react'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const user = useUser()
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-100 py-4">
        <div className="container mx-auto">
          {/* Navigation */}
          <nav>
            <ul className="flex">
              <li className="mr-6"><Link href="/">Home</Link></li>
              <li className="mr-6"><Link href="/search">Search</Link></li>
              {!user ? (
                <>
                  <li className="mr-6"><Link href="/login">Login</Link></li>
                  <li><Link href="/register">Register</Link></li>
                </>
              ) : (
                <li><Auth /></li>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto flex-grow">
        {children}
      </main>
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} Sales Agent Portal
        </div>
      </footer>
    </div>
  );
};

export default Layout;
