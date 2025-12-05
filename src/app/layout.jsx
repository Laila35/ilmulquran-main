import "./globals.css";
import ClientLayout from "@/app/ClientLayout";

export const metadata = {
  title: 'Ilmul Quran - Online Quran Learning',
  description: 'Learn Quran online with qualified teachers. One-on-one classes for kids and adults.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}