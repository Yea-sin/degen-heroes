import { useState } from "react";

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return { setIsOpen, handleToggle, isOpen };
};
export default useToggle;
