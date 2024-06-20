import {
  ClerkProvider,
} from "@clerk/nextjs";
import "./globals.css";
import Header from "@/components/Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header/>

          <div className="max-w-6xl mx-auto">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
