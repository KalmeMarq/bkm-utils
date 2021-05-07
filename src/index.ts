export * from './BKMMap'
export * from './BKMList'
export * from './BiBKMMap'
export * from './StringBuilder'
export * from './BKMIterator'
export * from './BKMSplitter'

export class BKMUtil {
  public static equals (str0: string, str1: string): boolean {
    return str0 === str1
  }

  public static format (str: string, ...args: any): string {
    for (let i = 0; i < args.length; i++) str = str.replace(/%[a-zA-Z]/, args[i])
    return str
  }

  public static hashCode(text: string): number {
    let hash = 0;
    for(let i = 0; i < text.length; i++) {
      let textChar = text.charCodeAt(i);
      hash = ((hash << 5) - hash) + textChar;
      hash = hash & hash;
    }
    return hash;
  }
}