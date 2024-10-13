"use client"

import Link from 'next/link';
import { ShoppingCart, Sun, Moon } from 'lucide-react';
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function Header() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="bg-background shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Aloha Glow
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/shop" className="text-foreground hover:text-primary transition-colors">
            Shop
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            className="mr-6"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
          <Link href="/cart">
            <ShoppingCart className="text-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </nav>
    </header>
  );
}