export type User = {
  id:number;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: string;
  photo: string;
};
export type UserReq = {
  success: boolean;
  total_pages: string;
  total_users: string;
  count: string;
  page: string;
  links: {
    next_url: string | null;
    prev_url: string | null;
  };
  users: User[];
};

export type PayloadGetUsers = {
  page: number;
  count: number;
};

export type Position = {
  success: boolean;
  positions: {
    id: number;
    name: string;
  }[];
};

export type StateUser = {
  users: UserReq | null;
  currentUser: User[];
  positions: Position | null;
  isLoading: boolean;
  isError: string | null;
  page: number;
  totalPages: number;
};
