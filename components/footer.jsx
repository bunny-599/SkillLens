import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Footer() {
  return (
    <footer style={{ padding: '1rem', background: '#222', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
      <span>© 2025 My App</span>
      <nav>
        <SignedOut>
          <SignInButton />
          <SignUpButton style={{ marginLeft: '1rem' }} />
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </nav>
    </footer>
  );
}
