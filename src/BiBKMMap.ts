import { BKMMap } from "./BKMMap"

export class BiBKMMap<K, V> extends BKMMap<K, V> {
  public reverse(): BiBKMMap<V, K> {
    return new BiBKMMap<V, K>(Array.from(this, a => a.reverse()) as any[])
  }

  /**
   * Returns a Set with the map values
   */
  public values(): any {
    return new Set(super.values())
  }
}