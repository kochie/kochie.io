import Image from "next/image";
import Link from "next/link";

const h1 = ({ children }) => (
  <h1 className="text-4xl font-extrabold mb-3.5">{children}</h1>
);

const h2 = ({ children }) => (
  <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-50 sm:text-4xl">
    {children}
  </h2>
);
const p = ({ children }) => (
  <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-white">
    {children}
  </p>
);
const a = ({ children, href }) => (
  <Link
    href={href}
    className="underline dark:text-orange-300 dark:hover:text-orange-600 text-indigo-600 hover:text-indigo-900 cursor-pointer"
  >
    {children}
  </Link>
);
const img = ({ src, alt }) => (
  <Image
    src={src}
    s
    alt={alt}
    className="my-10 rounded-xl"
    style={{
      maxWidth: "100%",
      height: "auto",
    }}
  />
);
export function useMDXComponents(components) {
  return { h1, h2, p, a, img, ...components };
}
