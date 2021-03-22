import React from "react";

export const useFocusWithin = (ref, { mouse = true, keyboard = true } = {}) => {
  const [isFocusWithin, setIsFocusWithin] = React.useState(null);

  React.useEffect(() => {
    const onClick = () => {
      if (ref && ref.current) {
        setIsFocusWithin(ref.current.contains(document.activeElement));
      }
    };

    const onTabPress = (e) => {
      if (ref && ref.current && e.key === "Tab") {
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
  }, [ref, mouse, keyboard]);

  return isFocusWithin;
};
