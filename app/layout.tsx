export const metadata = {
  title: 'Sprint 17 Frontend Deployment',
  description: 'Production-ready frontend app built for deployment and Lighthouse optimization.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
