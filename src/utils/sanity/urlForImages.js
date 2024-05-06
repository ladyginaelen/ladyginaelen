import { client } from "./client"
import imageUrlBuilder from '@sanity/image-url'

export const builder = imageUrlBuilder(client)

export function urlForImages(source) {
  return builder.image(source)
}