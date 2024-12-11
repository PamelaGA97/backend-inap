import { PartialType } from "@nestjs/swagger";
import { CreateFacultyCourseDto } from "./create-faculty-course.dto";

export class UpdateFacultyCourseDto extends PartialType(CreateFacultyCourseDto) {}
