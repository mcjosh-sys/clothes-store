import { type ClassValue, clsx } from "clsx"
import { ReadonlyURLSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getImageUrl = (url: string): string => {
  const uploadIndex = url.indexOf("/upload/") + "/upload/".length;
  let newUrl = ''

  if (uploadIndex !== -1) {
    const firstPart = url.substring(0, uploadIndex);
    const secondPart = url.substring(uploadIndex-1);

    newUrl = `${firstPart}q_60/${secondPart}`;
  }
  return newUrl;
}

export const parseSearchParams = (searchParams: ReadonlyURLSearchParams) => {
  let resolve = [{}]
  searchParams.forEach((value, key) => { resolve.push({ [key]: value }) })
  
  return resolve
}
