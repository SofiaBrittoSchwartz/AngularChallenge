export class DataRow {
    description: string;
    code: number;
    role: string;
    active: boolean;
    lastModifiedBy: string;
    lastModifiedDateTime: Date;

    constructor(description: string, code: number, role: string, active: boolean, lastModifiedBy: string, lastModifiedDateTime: Date) {
        this.description = description;
        this.code = code;
        this.role = role;
        this.active = active;
        this.lastModifiedBy = lastModifiedBy;
        this.lastModifiedDateTime = lastModifiedDateTime;
    }
}
