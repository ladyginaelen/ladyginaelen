import { toHTML } from '@portabletext/to-html';
import { urlForImages } from './urlForImages';

const customComponents = {
  /* your custom components here */
  types: {
    image: ({ value }) => `<img src="${urlForImages(value).url()}" />`,
  },
};

export function sanityPortableText(portabletext) {
  return toHTML(portabletext, customComponents);
}