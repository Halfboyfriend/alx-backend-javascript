interface Teachers {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    contract: boolean;
    [propName: string]: any;

}

interface Directors extends Teachers{

}