export interface Role {
    id: string,
    name: string,
    rolePermission: RolePermission[]
}

interface RolePermission {
    permission: {
        name: string,
        description: string,
        permissionType: number
    },
    canEdit: boolean,
    canDelete: boolean,
    canView: boolean
}
