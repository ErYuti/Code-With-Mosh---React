import { Teacher } from "./teacherModule2";
// import { promote } from "./NamedDefaultExport";
import Teacher, { promote } from "./NamedDefaultExport";


// Default ==> import ... from '';
// Named ==> import {...} from '';


const teacher = new Teacher('yuti', 'Betch');
teacher.teach();