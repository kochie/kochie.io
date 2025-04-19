import Link from "next/link";
import { faFacebook, faGithub, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const navigation = {
  main: [
    { name: "About", href: "https://me.kochie.io" },
    { name: "Blog", href: "https://blog.kochie.io" },
    { name: "Contact", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://instagram.com/rkkochie",
      icon: (props) => (
        <FontAwesomeIcon size="lg" icon={faInstagram} />
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/kochie",
      icon: (props) => (
        <FontAwesomeIcon size="lg" icon={faTwitter} />
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/kochie",
      icon: (props) => (
        <FontAwesomeIcon size="lg" icon={faGithub} />
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com/rkkochie",
      icon: (props) => (
        <FontAwesomeIcon size="lg" icon={faYoutube} />
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:text-white text-black dark:bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 sm:pb-12 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6  hover:text-gray-900"
                legacyBehavior>
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transform duration-200 hover:scale-110"
              legacyBehavior>
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5">
          &copy; 2023 koch.ie. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
