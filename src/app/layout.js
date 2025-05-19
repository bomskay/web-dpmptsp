import 'leaflet/dist/leaflet.css';
import './globals.css';
import LayoutWrapper from '@/components/layout/layoutWrapper';


export const metadata = {
  title: "Website DPMPTSP",
  description: "Web Pengenalan Dinas Penanaman Modal dan PTSP",
  icons: {
    icon: "/image/favicon-32x32.png", // cukup string juga bisa
  },
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
