import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "ScaleForge Portal",
  description: "ScaleForge Employee & Admin Portal",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PortalLayout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}
