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
  condominiumName: string;
  contact: string;
  administerAddress: string;
  administerTelephone: string;
  administerEmail: string;
  observations: string;
  doorKeeperChief: string;
  receptionTelephone: string;
};

export type EmployeesInformationFormData = {
  employees: {
    name: string;
    email: string;
  }[];
};
