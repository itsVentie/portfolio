import avatarImg from "@assets/avatars/gif/avatar.gif";
import photo1 from "@assets/avatars/jpg/avatar.jpg";
import photo2 from "@assets/avatars/jpg/avatar1.jpg";
import photo3 from "@assets/avatars/jpg/avatar2.jpg";
import photo4 from "@assets/avatars/jpg/avatar3.jpg";
import gif1 from "@assets/avatars/gif/avatar1.gif";
import gif2 from "@assets/avatars/gif/avatar2.gif";

export interface AvatarItem {
  id: string;
  src: string;
  alt: string;
}

export type AvatarTab = "photos" | "gifs";

const TG_AVATAR_URL = "https://unavatar.io/telegram/ventie";

export const DEFAULT_AVATAR = TG_AVATAR_URL;

export const photosData: AvatarItem[] = [
  { id: "p1", src: photo1, alt: "Photo 1" },
  { id: "p2", src: photo2, alt: "Photo 2" },
  { id: "p3", src: photo3, alt: "Photo 3" },
  { id: "p4", src: photo4, alt: "Photo 4" },
];

export const gifsData: AvatarItem[] = [
  { id: "g1", src: avatarImg, alt: "Gif" },
  { id: "g2", src: gif1, alt: "Gif 1" },
  { id: "g3", src: gif2, alt: "Gif 2" },
];