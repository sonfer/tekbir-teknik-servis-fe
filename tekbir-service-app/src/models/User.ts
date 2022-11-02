import {Role} from "./Role";
import {Tenant} from "./Tenant";

export interface User {
    firstName: string,
    lastName: string,
    email: string,
    departmentId: string,
    departmentName: string,
    roleId: string,
    role: Role
}

export interface UserAuth extends User{
    authToken: string,
    tenantId: string,
    tenant: Tenant
}

