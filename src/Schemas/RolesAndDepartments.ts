import { model, Schema } from 'mongoose';

const RolesAndDepartmentsSchema = new Schema({
    Role: String,
    DepartmentName: [String],
});

export default model('RolesAndDepartments', RolesAndDepartmentsSchema);
