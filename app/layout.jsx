import { Inter } from "next/font/google";
import "./globals.css";
import ProductsContextProvider from "@/context/ProductsContext";

const inter = Inter({ style: "normal", subsets: ["cyrillic"] });

export const metadata = {
  title: "O-complex",
  description: "Test task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <ProductsContextProvider>
        <body className={`${inter.className} bg-primary container max-sm:px-4`}>
          {children}
        </body>
      </ProductsContextProvider>
    </html>
  );
}
