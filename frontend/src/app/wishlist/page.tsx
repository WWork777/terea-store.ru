import WishlistLayout from "@/components/wishlist/wishlistLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Избранное | terea-store",
  description: "Ваш список избранных товаров IQOS Iluma и TEREA",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Избранное | terea-store",
    description: "Ваш список избранных товаров",
    url: "https://terea-store.ru/wishlist",
  },
};

export default function WishList() {
  return <WishlistLayout />;
}
