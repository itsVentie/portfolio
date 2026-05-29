import { useState } from "react";
import { DEFAULT_AVATAR } from "./avatars.config";
import type { AvatarTab } from "./avatars.config";

export const useAvatarManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<AvatarTab>("photos");
  const [currentAvatar, setCurrentAvatar] = useState(DEFAULT_AVATAR);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const selectAvatar = (src: string) => {
    setCurrentAvatar(src);
    closeModal();
  };

  return {
    isModalOpen,
    activeTab,
    currentAvatar,
    setActiveTab,
    openModal,
    closeModal,
    selectAvatar,
  };
};
