import { useEffect } from "react";

type SEOHeadProps = {
  title: string;
  description: string;
};

export default function SEOHead({ title, description }: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);
  }, [title, description]);

  return null;
}