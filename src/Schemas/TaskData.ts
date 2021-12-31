import { model, Schema } from 'mongoose';

const TaskDataSchema = new Schema({
    TaskId: Schema.Types.ObjectId,
    TaskName: String,
    TaskSummary: String,
    DueDate: Date,
    VisibleDate: Date,
    AssignedToUsers: [String],
    StoreAndStatus: [
        {
            StoreId: Schema.Types.ObjectId,
            Departments: {
                DepartmentId: Schema.Types.ObjectId,
                DepartmentName: String,
                CompletedOn: Date,
                CompletedBy: String,
            },
        },
    ],
    Contacts: {
        ContactId: Schema.Types.ObjectId,
        Name: String,
        Email: String,
        Phone: String,
    },
    Attachments: {
        AttachmentId: Schema.Types.ObjectId,
        Name: String,
        Link: String,
    },
    Configuration: {
        MorningNews: Boolean,
        PushNotification: Boolean,
    },
});

export default model('RolesAndDepartments', TaskDataSchema);
