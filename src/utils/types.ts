type TPosts = {
  id: number;
  userId: number;
  title: string;
  body: string;
}


type TUserPayload = {
  id: number;
  username: string;
  isAdmin: boolean;
};

export type {TPosts, TUserPayload};