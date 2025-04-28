declare module 'aos' {
  interface AosOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    offset?: number;
    delay?: number;
    anchor?: string;
    anchorPlacement?: string;
    disable?: string | boolean | (() => boolean);
  }

  export interface AosInstance {
    init(options?: AosOptions): void;
    refresh(mustClearCache?: boolean): void;
    refreshHard(): void;
  }

  const aos: AosInstance;
  export default aos;
}