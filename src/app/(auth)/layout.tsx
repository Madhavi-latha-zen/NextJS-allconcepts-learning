"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "ForgotPassword", href: "/forgotpassword" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return(
    <div>
        {navLinks.map((link)=>{
            const isActive =pathname.startsWith(link.href);
            return(
            <Link href={link.href} key={link.name}>{link.name}</Link>
            )
        })}
        {children}
    </div>
  )
}
