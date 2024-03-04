export interface LoginDTTO{ 
email: string; 
password: string; 
}

export interface RegisterDTTO{ 
Nom:string, 
Prénom: string,  
email: string,  
password: string,  
confirmPassword?: string, 
Phone: number;  
}