export interface Champion {
    c_name: string;
    c_lane: 'top' | 'bot' | 'mid' | 'sup' | 'jg';
    c_splash_art?: string;
    c_icon?: string;
    c_tips: Tip[];
  }
  
  interface Tip {
    title?: string;
    description?: string;
  }
  
