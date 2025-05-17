import './globals.css';
import LayoutWrapper from '@/components/layout/layoutWrapper';


export const metadata = {
  title: "Website DPMPSTP",
  description: "Login with Firebase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="min-h-screen flex flex-col">
    <LayoutWrapper>{children}</LayoutWrapper>
    </body>
  </html>
  );
}
