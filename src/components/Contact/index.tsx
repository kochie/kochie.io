"use client";
import Cal from "@calcom/embed-react";

import Text from "./contact.mdx"

export default function Contact() {
  return (
    <div className="py-10">
      <div className="mb-10 text-center mx-auto max-w-4xl">
        <Text />
      </div>

      <Cal
        calLink="kochie/15min"
        config={{
          name: "Robert Koch",
          email: "robert@kochie.io",
          notes: "Catch up meeting",
          guests: [],
          theme: "dark",
        }}
      />
    </div>
  );
}
