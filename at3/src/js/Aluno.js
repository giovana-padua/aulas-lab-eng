import {Pessoa} from "./Pessoa.js"

export class Aluno extends Pessoa {
    constructor(
        par_name_student, 
        par_email_student, 
        par_bday_student, 
        p_tel_student, 
        par_sphone_student, 
        par_position_student,
        par_enrollment_student,
        par_current
    )
    {
        super(
            par_name_student, 
            par_email_student, 
            par_bday_student, 
            p_tel_student, 
            par_sphone_student, 
            par_position_student,
            par_enrollment_student)
        
        this.current = par_current
    }
}
