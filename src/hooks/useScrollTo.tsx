import { useLenis } from "@/components/smooth-scroll";
export function useScrollTo() {
  const lenisRef = useLenis();
  return (target: string | number, onComplete?: () => void) => {
    lenisRef?.current?.scrollTo(target, {
      offset: 0,
      duration: 1.2,
      onComplete,
    });
  };
}
