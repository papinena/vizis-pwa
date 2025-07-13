export type BasicInformationFormData = {
  telephone: string;
  position: string;
  isResident: boolean;
  blockAndApartment: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
};

export type CondominiumInformationFormData = {
  administer: string;
  contact: string;
  administerAddress: string;
  administerTelephone: string;
  administerEmail: string;
  observations: string;
  doorKeeperChief: string;
  receptionTelephone: string;
};

export type EmployeesInformationFormData = {
  employeeName1: string;
  employeeName2: string;
  employeeName3: string;
  employeeEmail1: string;
  employeeEmail2: string;
  employeeEmail3: string;
};
