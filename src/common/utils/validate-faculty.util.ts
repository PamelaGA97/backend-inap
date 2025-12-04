import { BadRequestException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Faculty } from "../../modules/faculties/entities/faculty.entity";

export async function validateFacultyInput(
	facultyInput: string | Faculty,
	facultyRepository: Repository<Faculty>
): Promise<Faculty> {
	let facultyId: string;

	if (typeof facultyInput === "string") {
		facultyId = facultyInput;
	}

	else if (typeof facultyInput === "object" && facultyInput.id) {
		facultyId = facultyInput.id;
	}

	else {
		throw new BadRequestException(
			"El campo faculty debe ser un string (id) o un objeto Faculty con id."
		);
	}

	const faculty = await facultyRepository.findOne({ where: { id: facultyId } });

	if (!faculty) {
		throw new BadRequestException("La facultad enviada no existe.");
	}

	return faculty;
}