import { Metadata, MetadataRoute } from 'next'
import React from 'react'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
        url: "https://toefldiscountcode.com/"
    },
    {
        url: "https://toefldiscountcode.com/discover"
    },
    {
        url: "https://toefldiscountcode.com/discover/toefl-ets"
    }
  ]
}
