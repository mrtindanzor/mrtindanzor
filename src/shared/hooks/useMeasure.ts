import { useCallback, useLayoutEffect, useRef, useState } from "react";

type UseMeasure<T> = {
  element?: React.RefObject<T | null>;
  selector?: string;
  node?: T | null;
};

export function useMeasure<T>({
  element,
  selector,
  node: elementNode,
}: UseMeasure<T> = {}) {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const node = useRef<HTMLElement>(null);

  const getNode = useCallback(
    (itemNode?: unknown) => {
      const enabled = !!(
        element?.current ||
        selector ||
        elementNode ||
        itemNode
      );
      if (!enabled) return null;

      let el: HTMLElement | null = null;
      const setEl = (element: unknown) => {
        if (element && element instanceof HTMLElement) return element;
        return el;
      };

      el = setEl(elementNode);
      el = setEl(element?.current);
      el = setEl(itemNode);
      if (selector) el = setEl(document.querySelector(selector));

      if (!el || !(el instanceof HTMLElement)) return null;
      if (!itemNode) node.current = el;

      return el;
    },
    [element, selector, elementNode],
  );

  const getDimensions = useCallback(
    (itemNode?: unknown) => {
      const el = getNode(itemNode);
      if (!el) return;

      const { width, height } = el.getBoundingClientRect();
      const { offsetLeft, offsetTop } = el;

      setHeight(height);
      setWidth(width);
      setTop(offsetTop);
      setLeft(offsetLeft);

      return { height, width, offsetTop, offsetLeft };
    },
    [getNode],
  );

  const getScrollDimensions = useCallback(
    (itemNode?: unknown) => {
      const el = getNode(itemNode);
      if (!el) return;

      const { scrollWidth, scrollHeight, scrollLeft } = el;

      setScrollWidth(scrollWidth);
      setScrollHeight(scrollHeight);
      setScrollLeft(scrollLeft);

      return { scrollWidth, scrollHeight, scrollLeft };
    },
    [getNode],
  );

  const getNodeDimensions = useCallback(
    <T>(node: T | null | undefined) => {
      const scrollDimensions = getScrollDimensions(node);
      const rectDimensions = getDimensions(node);

      return { ...(scrollDimensions ?? {}), ...(rectDimensions ?? {}) };
    },
    [getScrollDimensions, getDimensions],
  );

  useLayoutEffect(() => {
    getDimensions();
    getScrollDimensions();

    const el = getNode();
    if (!el) return;

    const observer = new ResizeObserver(() => {
      getDimensions();
      getScrollDimensions();
    });

    observer.observe(el);

    el.addEventListener("scroll", getScrollDimensions);

    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", getScrollDimensions);
    };
  }, [getDimensions, getScrollDimensions, getNode]);

  return {
    height,
    width,
    offsetTop: top,
    offsetLeft: left,
    scrollHeight,
    scrollWidth,
    scrollLeft,
    node,
    getNodeDimensions,
  };
}
