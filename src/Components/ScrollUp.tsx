import { useState, useEffect } from "react";
import "../style/ScrollToTopButton.scss";

const ScrollToTopButton = () => {
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setisVisible(window.pageYOffset > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {};
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div>
      {isVisible && (
        <button
          className="scroll-to-top-button z-30 ease-linear"
          onClick={scrollToTop}
        >
          <img
            className="w-16 bg-gray-200"
            src="./icons/arrowup.svg"
            alt="up"
          />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
