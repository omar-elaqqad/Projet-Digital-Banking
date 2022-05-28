import {OperationType} from "./enums/OperationType";

export interface Operation{
  id :number ;
  date :Date ;
  amount :number;
  type : typeof OperationType;
  description : String
}
