import { BKMList } from "./BKMList";
import { BKMIterator } from "./BKMIterator";

export class BKMSplitter {
  private splitted: any[] = []
  private breaker: string | RegExp = ''
  private limited: number = Infinity

  private constructor(breaker: string | RegExp, limit: number) {
    this.breaker = breaker;
    this.limited = limit
  }

  public static on(breaker: string): BKMSplitter {
    return new BKMSplitter(breaker, Infinity)
  }

  public limit(limit: number) {
    return new BKMSplitter(this.breaker, limit);
  }

  public split(text: string): BKMIterator<any> {
    this.splitted = text.split(this.breaker);

    if(this.limited < this.splitted.length) {
      this.splitted = this.splitted.slice(0, this.limited);
    }

    return new BKMIterator(this.splitted)
  }

  public splitToList(): BKMList<any> {
    return new BKMList(...this.splitted)
  }
}