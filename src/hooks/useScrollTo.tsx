import { useLenis } from "@/components/smooth-scroll";

export function useScrollTo() {
  const lenis = useLenis();

  return (target: string | number, onComplete?: () => void) => {
    lenis?.scrollTo(target, {
      offset: 0,
      duration: 1.2,
      onComplete,
    });
  };
}
