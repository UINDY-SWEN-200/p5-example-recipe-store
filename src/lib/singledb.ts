/*
 ** A singleton DB that can be observed
 */

import { SimpleDB } from "./simpledb"
import type { IDb, IObserver } from "./dbObserver"

export class SingleDB<T> extends SimpleDB<T> implements IDb {
  private static _singleton: SingleDB<any>
  private observers: IObserver[]

  constructor() {
    super()
    this.observers = []
  }

  static getInstance<T>(): SingleDB<T> {
    if (!this._singleton) {
      this._singleton = new SingleDB<T>()
      return this._singleton
    } else {
      return this._singleton
    }
  }

  subscribe(observer: IObserver) {
    this.observers.push(observer)
  }
  unsubscribe(observer: IObserver) {
    this.observers = this.observers.filter(o => o !== observer)
  }

  notify() {
    this.observers.forEach(o => o.notify())
  }
  
}
