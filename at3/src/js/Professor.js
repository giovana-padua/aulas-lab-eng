import {Pessoa} from "./Pessoa.js"

export class Professor extends Pessoa {
    constructor(
        par_name_professor, 
        par_email_professor, 
        par_bday_professor, 
        p_tel_professor, 
        par_sphone_professor, 
        par_position_professor,
        par_enrollment_professor,
        par_field,
        par_lattes
    )
    {
        super(
            par_name_professor, 
            par_email_professor, 
            par_bday_professor, 
            p_tel_professor, 
            par_sphone_professor, 
            par_position_professor,
            par_enrollment_professor)
        
        this.field = par_field
        this.lattes = par_lattes
    }
    
}
