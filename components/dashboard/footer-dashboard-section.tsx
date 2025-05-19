'use client'

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-4 text-center text-sm text-muted-foreground">
      <div className="container mx-auto">
        <p>© {new Date().getFullYear()} SignText. Built with care to make communication accessible.</p>
      </div>
    </footer>
  );
};