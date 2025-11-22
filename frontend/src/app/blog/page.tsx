import BreadCrumbs from "@/components/common/breadcrums";
import BlogGrid from "@/components/ui/blogCard/blogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог о IQOS Iluma и TEREA | Полезные статьи и обзоры | terea-store",
  description:
    "Читайте полезные статьи о устройствах IQOS Iluma и стиках TEREA. Обзоры новинок, советы по использованию, сравнение моделей и многое другое в блоге terea-store.",
  keywords:
    "блог iqos, статьи о iluma, обзоры terea, советы по использованию, новинки нагревательных устройств, уход за iqos, сравнение стиков terea",
  openGraph: {
    title: "Блог о IQOS Iluma и TEREA | terea-store",
    description:
      "Полезные статьи, обзоры и советы по использованию устройств IQOS Iluma и стиков TEREA",
    url: "https://terea-store.ru/blog",
    siteName: "terea-store",
    images: [
      {
        url: "/og-blog-image.jpg",
        width: 1200,
        height: 630,
        alt: "Блог о IQOS Iluma и TEREA - terea-store",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Блог о IQOS Iluma и TEREA | terea-store",
    description: "Полезные статьи и обзоры устройств для нагрева табака",
    images: ["/twitter-blog-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://terea-store.ru/blog",
  },
};

export default function Blog() {
  return (
    <section className="hero-container">
      <div className={"second_page_header"}>
        <h1>Блог</h1>
        <BreadCrumbs
          items={[{ label: "Главная", href: "/" }, { label: "Блог" }]}
        />
      </div>
      <BlogGrid />
    </section>
  );
}
