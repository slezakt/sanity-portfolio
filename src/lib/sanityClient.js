import { groq, useSanityClient } from 'astro-sanity';
import { createImageBuilder } from 'astro-sanity';

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source) {
  return imageBuilder.image(source);
}

export async function getAbout() {
  const query = groq`*[_type == "about"][0]{title, content}`;
  const about = await useSanityClient().fetch(query);
  return about;
}

export async function getServices() {
  const query = groq`*[_type == "services"]{image, title, content}`;
  const services = await useSanityClient().fetch(query);
  return services;
}

export async function getCooperation() {
  const query = groq`*[_type == "cooperation"]{image, title, content}`;
  const cooperations = await useSanityClient().fetch(query);
  return cooperations;
}

export async function getContact() {
  const query = groq`*[_type == "contact"][0]{name, street, city, state, phone, email, info}`;
  const cooperations = await useSanityClient().fetch(query);
  return cooperations;
}
