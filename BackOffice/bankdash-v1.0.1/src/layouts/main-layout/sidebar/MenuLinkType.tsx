// Assume this is your MenuLinkType definition
export interface MenuLinkType {
    id: number; // Ensure this is number if it was defined as string
    title: string;
    link: string;
    icon: any;
    available: boolean;
  }
  