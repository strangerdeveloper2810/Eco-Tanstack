// Hook Props Types
export interface UseTitleProps {
  customTitle?: string;
  suffix?: string;
}

// Hook Return Types
export interface UseTitleReturn {
  setTitle: (title: string, suffix?: string) => void;
  getTitle: () => string;
  resetTitle: () => void;
}

// Hook State Types
export interface UseTitleState {
  currentTitle: string;
  customTitle?: string;
  suffix?: string;
}
