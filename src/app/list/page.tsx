import React from 'react'
import ListPageComponent from './ListPageComponent'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "List",
  description: "All products are list down in this page",
  keywords: ["shop", "discount", "promotion", "coupon"]
};

const page = () => {
  return (
    <div>
      <ListPageComponent/>
    </div>
  )
}

export default page
