import "./globals.css";

export const metadata = {
  title: "Project Alpha",
  description: "AI investeerimisassistent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="et">
      <body>
        {children}
      </body>
    </html>
  );
}
