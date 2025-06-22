export interface IAmineties {
  _id: string;
  name: string;
  image: string;
  description: string;
  pricePerDay: number;
  isServiceFree: boolean;
  isActive: boolean;
  createdAt: string;  // ISO date string
  updatedAt: string;  // ISO date string
  __v: number;
}
