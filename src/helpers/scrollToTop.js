import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  // const xablau = useRef(null);
  // xablau.current.focus()
  useEffect(() => { //useRef + focus()
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}