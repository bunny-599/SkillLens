import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";

export default function Header() {

  return (
    <header
      className="fixed top-0 w-full z-50 border-b transition-all duration-500 backdrop-blur-2xl bg-transparent supports-[backdrop-filter]:bg-white/5"
      style={{
        borderImage: "linear-gradient(90deg, #00ffe7, #ff00c8) 1",
        borderWidth: "0 0 2px 0",
        borderStyle: "solid",
      }}
    >
      <style>
        {`
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .spin-slow {
            animation: spin-slow 6s linear infinite;
          }
        `}
      </style>

      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg select-none tracking-widest">
            <Image
              src="/logo.png"
              alt="SkillLens Logo"
              width={200}
              height={60}
              className="h-12 py-1 w-auto object-contain inline-block align-middle"
            />
          </span>
        </Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300 shadow-md"
              >
                <LayoutDashboard className="h-4 w-4" />
                <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Industry Insights</span>
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-2 transition-transform duration-300 shadow-md">
                  <StarsIcon className="h-4 w-4 spin-slow" />
                  <span className="hidden md:block text-white bg-clip-text">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">

                <DropdownMenuItem asChild>
                  <Link href="/resume" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span className="text-white">Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/ai-cover-letter" className="flex items-center gap-2">
                    <PenBox className="h-4 w-4" />
                    <span className="text-white"></span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/interview" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span className="text-white">Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="outline" className="hover:scale-105 transition-transform duration-300 shadow-md">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier:
                    "font-semibold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}