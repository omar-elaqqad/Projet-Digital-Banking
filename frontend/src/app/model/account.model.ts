export interface Account{
  id :number ;
  balance :number ;
  date :Date ;
  status : typeof status;
  type : String ;
}
export interface AccountDetails {
  accountId:            string;
  balance:              number;
  currentPage:          number;
  totalPages:           number;
  pageSize:             number;
  accountOperationDTOS: accountOperationDTOS[];
}

export interface accountOperationDTOS {
  id:            number;
  operationDate: Date;
  amount:        number;
  type:          string;
  description:   string;
}
