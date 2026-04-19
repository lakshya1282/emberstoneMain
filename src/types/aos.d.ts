declare module "aos" {
  type AosOptions = {
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
  };

  const AOS: {
    init: (options?: AosOptions) => void;
    refresh: () => void;
  };

  export default AOS;
}
