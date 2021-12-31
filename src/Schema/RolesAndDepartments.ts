import { model, Schema } from 'mongoose';

//To be discussed... might be that auth endpoint returns roles which aren't the ones saved in the DB...

const RolesAndDepartmentsSchema = new Schema({
    Role: String,
    DepartmentName: [String],
});

export default model('RolesAndDepartments', RolesAndDepartmentsSchema);
