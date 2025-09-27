import { type CommonSettings } from "@/types/settings";

const commonSettings: CommonSettings = {
  setStorageJson: <T>(name: string, data: T): void => {
    if (typeof window !== "undefined") {
      localStorage.setItem(name, JSON.stringify(data));
    }
  },

  setStorage: <T>(name: string, data: T, ttl?: number): void => {
    if (typeof window !== "undefined") {
      const item: { value: T; expiry?: number } = { value: data };
      if (ttl) {
        item.expiry = Date.now() + ttl;
      }
      localStorage.setItem(name, JSON.stringify(item));
    }
  },

  getStorage: <T>(name: string): T | null => {
    if (typeof window === "undefined") return null;

    const itemStr = localStorage.getItem(name);
    if (!itemStr) return null;

    try {
      const item = JSON.parse(itemStr);
      if (item.expiry && Date.now() > item.expiry) {
        localStorage.removeItem(name);
        return null;
      }
      return item.value as T;
    } catch (error) {
      console.error(
        `[commonSettings] Error parsing storage for key: ${name}`,
        error
      );
      return null;
    }
  },

  getStorageJson: <T>(name: string): T | undefined => {
    if (typeof window === "undefined") return undefined;

    const itemStr = localStorage.getItem(name);
    if (!itemStr) return undefined;

    try {
      return JSON.parse(itemStr) as T;
    } catch (error) {
      console.error(
        `[commonSettings] Error parsing JSON storage for key: ${name}`,
        error
      );
      return undefined;
    }
  },

  clearStorageItem: (name: string): void => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(name);
    }
  },

  clearStorage: (): void => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
  },

  setCookieJson: (name: string, value: unknown, hours: number): void => {
    if (typeof window !== "undefined") {
      const date = new Date();
      date.setTime(date.getTime() + hours * 60 * 60 * 1000);
      document.cookie = `${name}=${encodeURIComponent(
        JSON.stringify(value)
      )}; path=/; SameSite=None; Secure; expires=${date.toUTCString()}`;
    }
  },

  getCookieJson: <T>(name: string): T | null => {
    if (typeof window === "undefined") return null;

    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(";");
    for (let c of cookies) {
      c = c.trim();
      if (c.startsWith(nameEQ)) {
        try {
          return JSON.parse(
            decodeURIComponent(c.substring(nameEQ.length))
          ) as T;
        } catch (error) {
          console.error(
            `[commonSettings] Error parsing JSON cookie for key: ${name}`,
            error
          );
          return null;
        }
      }
    }
    return null;
  },

  getCookie: (name: string): string | null => {
    if (typeof window === "undefined") return null;

    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(";");
    for (let c of cookies) {
      c = c.trim();
      if (c.startsWith(nameEQ)) {
        return decodeURIComponent(c.substring(nameEQ.length));
      }
    }
    return null;
  },

  eraseCookie: (name: string): void => {
    if (typeof window !== "undefined") {
      document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=None; Secure;`;
    }
  },

  clearCookies: (): void => {
    if (typeof window !== "undefined") {
      document.cookie.split("; ").forEach((cookie) => {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        commonSettings.eraseCookie(name);
      });
    }
  },

  clearAll: (): void => {
    commonSettings.clearStorage();
    commonSettings.clearCookies();
  },
};

export default commonSettings;
