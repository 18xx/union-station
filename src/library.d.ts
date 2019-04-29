declare class Library {
  constructor();
  public all(): readonly Game[];
  public find(name: string): Game | undefined;
  private add(game: Game): void;
}

declare module '18xx-library' {
  export = new Library()
}

