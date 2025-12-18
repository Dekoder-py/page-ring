import type { CollectionEntry } from "astro:content";
import { joinURL } from "ufo";

export interface Member {
  id: string;
  name: string;
  url: string;
  buttonUrl: string;
}

type Context = { url: URL };

export const buttonUrl = (url: string, context: Context) => {
  if (url.startsWith("/")) {
    return joinURL(context.url.origin, url);
  }
  return url;
};

export function toMember(
  member: CollectionEntry<"members">,
  context: Context,
): Member {
  return {
    id: member.id,
    name: member.data.name,
    url: member.data.url,
    buttonUrl: buttonUrl(member.data.buttonUrl, context),
  };
}
