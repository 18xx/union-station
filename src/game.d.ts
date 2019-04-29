declare class Game {
  public readonly location: Game;
  public readonly name: string;
  public readonly notes: string;
  private readonly defaultTo: Game;

  public rules(): Record<string, string>;
  public lookup(rule: string): string;
}
