type Primitive = number | string | boolean;
type ArrayOfPrimitives = Primitive[];
type ObjectOfPrimitives = {
  [key: string]: Primitive | Primitive[] | ObjectOfPrimitives;
}; // Allows nested structures

type DataSettings = Primitive | ArrayOfPrimitives | ObjectOfPrimitives;

interface CommonSettings {
  setStorageJson<T>(name: string, data: T): void;
  setStorage<T>(name: string, data: T, ttl?: number): void;
  getStorage<T>(name: string): T | null;
  getStorageJson<T>(name: string): T | undefined;
  clearStorageItem(name: string): void;
  clearStorage(): void;

  setCookieJson(name: string, value: unknown, hours: number): void;
  getCookieJson<T>(name: string): T | null;
  getCookie(name: string): string | null;
  eraseCookie(name: string): void;
  clearCookies(): void;
  clearAll(): void;
}

export type { DataSettings, CommonSettings };
