import React from "react";

export const useFocusWithin = (ref, { mouse = true, keyboard = true } = {}) => {
  const [isFocusWithin, setIsFocusWithin] = React.useState(null);

  React.useEffect(() => {
    const onClick = () => {
      setIsFocusWithin(ref.current.contains(document.activeElement));
    };

    const onTabPress = (e) => {
      if (e.key === "Tab") {
        setIsFocusWithin(ref.current.contains(document.activeElement));
      }
    };

    if (ref && ref.current) {
      mouse && document.addEventListener("click", onClick);
      keyboard && document.addEventListener("keyup", onTabPress);
    }

    return () => {
      mouse && document.removeEventListener("click", onClick);
      keyboard && document.removeEventListener("keyup", onTabPress);
    };
  }, [ref]);

  return isFocusWithin;
};
