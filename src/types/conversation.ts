export interface Conversation {
  meta: Meta;
  id: number;
  custom_attributes: CustomAttributes;
}

export interface Meta {
  assignee: Assignee;
  sender: Sender;
}

export interface Sender {
  id: number;
  email?: string;
  name?: string;
  phone_number?: string;
  custom_attributes?: CustomAttributes;
}

export interface Assignee {
  id: number;
  email?: string;
  name?: string;
  phone_number?: string;
}

export interface Variables {
  [key: string]: string | number;
}

export interface CustomAttributes {
  [key: string]: any;
}
