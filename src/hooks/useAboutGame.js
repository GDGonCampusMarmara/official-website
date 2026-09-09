import { useState } from "react";
import { expectations } from "../constants/aboutExpectations";

export function useAboutGame() {
  const [selected, setSelected] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [checking, setChecking] = useState(false);
  const [checked, setChecked] = useState(false);
  const [movingItems, setMovingItems] = useState([]);
  const [arrivedItems, setArrivedItems] = useState([]);

  const availableItems = expectations.filter(
    (item) => !selected.some((selectedItem) => selectedItem.id === item.id)
  );

  const addItem = (item) => {
    if (checking) return;

    setSelected((prev) => {
      if (prev.some((selectedItem) => selectedItem.id === item.id)) {
        return prev;
      }

      return [...prev, item];
    });

    setChecked(false);
  };

  const removeItem = (item) => {
    if (checking) return;

    setSelected((prev) =>
      prev.filter((selectedItem) => selectedItem.id !== item.id)
    );

    setChecked(false);
  };

  const handleDragStart = (event, item) => {
    setDraggedItem(item);
    event.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const handleDrop = (event) => {
    event.preventDefault();

    if (draggedItem) {
      addItem(draggedItem);
    }

    setDraggedItem(null);
  };

  const handleCheck = () => {
    if (selected.length === 0 || checking) return;

    const remainingItems = expectations.filter(
      (item) => !selected.some((selectedItem) => selectedItem.id === item.id)
    );

    setChecking(true);
    setChecked(false);
    setMovingItems(remainingItems);
    setArrivedItems([]);

    setTimeout(() => {
      setArrivedItems(remainingItems);
    }, 80);

    setTimeout(() => {
      setSelected(expectations);
      setMovingItems([]);
      setArrivedItems([]);
    }, 1350);

    setTimeout(() => {
      setChecked(true);
      setChecking(false);
    }, 1650);
  };

  return {
    selected,
    draggedItem,
    checking,
    checked,
    movingItems,
    arrivedItems,
    availableItems,
    addItem,
    removeItem,
    handleDragStart,
    handleDragEnd,
    handleDrop,
    handleCheck,
  };
}