import avatarImg from "@assets/avatars/gif/avatar.gif";
import photo1 from "@assets/avatars/jpg/avatar.jpg";
import photo2 from "@assets/avatars/jpg/avatar1.jpg";
import gif1 from "@assets/avatars/gif/avatar1.gif";
import gif2 from "@assets/avatars/gif/avatar2.gif";

export interface AvatarItem {
  id: string;
  src: string;
  alt: string;
}

export type AvatarTab = "photos" | "gifs";

export const DEFAULT_AVATAR = avatarImg;

export const photosData: AvatarItem[] = [
  { id: "p1", src: photo1, alt: "Photo 1" },
  { id: "p2", src: photo2, alt: "Photo 2" },
];

export const gifsData: AvatarItem[] = [
  { id: "g1", src: avatarImg, alt: "Default Gif" },
  { id: "g2", src: gif1, alt: "Gif 1" },
  { id: "g3", src: gif2, alt: "Gif 2" },
];
