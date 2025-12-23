// src/seeds/faculty-career.seeder.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faculty } from '../entities/faculty.entity';
import { CareerTimeEnum } from 'src/modules/courses/enum/career-time.enum';

@Injectable()
export class FacultyCareerSeeder {
  constructor(
    @InjectRepository(Faculty)
    private readonly facultyRepository: Repository<Faculty>,
  ) {}

  async seed() {
    const faculties = [
      {
        code: 'TEC',
        name: 'Tecnología',
        degrees: [
          { name: 'Ing. Industrial', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Ing. Mecánica', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Ing. Eléctrica', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Ing. Informática', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Ing. Electrónica' , courseTime: CareerTimeEnum.MID_YEAR},
          { name: 'Ing. Sistemas', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Ing. Electromecánica', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Ing. Civil' , courseTime: CareerTimeEnum.MID_YEAR},
          { name: 'Ing. Química' , courseTime: CareerTimeEnum.MID_YEAR},
          { name: 'Ing. Alimentos', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Lic. Biología', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Lic. Química', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Lic. Matemáticas', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Lic. Física', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Ing. Biotecnología', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Ing. Energía', courseTime: CareerTimeEnum.MID_YEAR },
        ],
        courses: [
          { name: 'Aritmética – Álgebra' },
          { name: 'Geometría – Trigonometría' },
          { name: 'Química' },
          { name: 'Biología' },
          { name: 'Física' },
        ]
      },
      {
        code: 'ECO',
        name: 'Economía',
        degrees: [
          { name: 'Economía', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Contaduría pública', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Administración de empresas', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Ing. Comercial', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Ing. Financiera', courseTime: CareerTimeEnum.MID_YEAR },
        ],
        courses: [
          { name: 'Matemáticas' },
          { name: 'Intr. A las Ciencias Económicas' },
          { name: 'Intr. A las Ciencias Administrativas' },
          { name: 'Intr. A las Ciencias Contables' },
        ]
      },
      {
        code: 'HUM',
        name: 'Humanidades',
        degrees: [
          { name: 'Ciencias de la educación', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Psicología' , courseTime: CareerTimeEnum.MID_YEAR},
          { name: 'Lingüística', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Trabajo social', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Ciencias del deporte', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Técnico superior en Parvulario', courseTime: CareerTimeEnum.MID_YEAR },
        ],
        courses: [
          { name: 'Razonamiento Verbal' },
          { name: 'Razonamiento Lógico' },
          { name: 'Estrategias de Aprendizaje' },
        ]
      },
      {
        code: 'VET',
        name: 'Agronomía, Veterinaria y Forestal',
        degrees: [
          { name: 'Agronomía', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Veterinaria', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Ing. Forestal', courseTime: CareerTimeEnum.MID_YEAR },
        ],
        courses: [
          { name: 'Matemáticas' },
          { name: 'Química' },
          { name: 'Biología' },
        ]
      },
      {
        code: 'MED',
        name: 'Medicina',
        degrees: [
          { name: 'Medicina', courseTime: CareerTimeEnum.YEAR },
          { name: 'Fisioterapia', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Nutrición', courseTime: CareerTimeEnum.MID_YEAR },
          { name: 'Enfermería', courseTime: CareerTimeEnum.YEAR },
        ],
        courses: [
          { name: 'Morfo función' },
          { name: 'Biología Celular' },
          { name: 'Anatomía Humana' },
          { name: 'Biomecánica' },
          { name: 'Fundamentos de la Fisioterapia' },
          { name: 'Matemáticas Lógica' },
          { name: 'Lenguaje' },
          { name: 'Principios de anatomía fisiología' },
          { name: 'Química general' },
          { name: 'Nutrición' },
          { name: 'Expresión oral y escrita' },
          { name: 'Biología' },
          { name: 'Matemáticas' },
          { name: 'Técnicas de estudio' },
        ]
      },
      {
        code: 'ODO',
        name: 'Odontología',
        degrees: [{ name: 'Odontología', courseTime: CareerTimeEnum.YEAR }],
        courses: [
          { name: 'Química' },
          { name: 'Biología' },
          { name: 'Lenguaje' },
        ]
      },
      {
        code: 'BIOQ',
        name: 'Bioquímica',
        degrees: [{ name: 'Bioquímica', courseTime: CareerTimeEnum.YEAR }],
        courses: [
          { name: 'Matemáticas' },
          { name: 'Química' },
          { name: 'Biología' },
          { name: 'Física' },
        ]
      },
      {
        code: 'DER',
        name: 'Ciencias Jurídicas y Políticas',
        degrees: [
          { name: 'Derecho', courseTime: CareerTimeEnum.YEAR },
          { name: 'Ciencia política', courseTime: CareerTimeEnum.YEAR },
        ],
        courses: [
          { name: 'Constitución Política del Estado' },
          { name: 'Historia de Bolivia' },
          { name: 'Introducción a la Ciencia Política' },
          { name: 'Institucionalidad Universitaria' },]
      },
      {
        code: 'ARQ',
        name: 'Arquitectura',
        degrees: [
          { name: 'Arquitectura', courseTime: CareerTimeEnum.YEAR },
          { name: 'Turismo', courseTime: CareerTimeEnum.YEAR },
          { name: 'Diseño gráfico', courseTime: CareerTimeEnum.YEAR },
          { name: 'Diseño de interiores', courseTime: CareerTimeEnum.YEAR },
          { name: 'Planificación de territorio y medio ambiente', courseTime: CareerTimeEnum.YEAR },
        ],
        courses: [
          { name: 'Ciencias del diseño y proyectos' },
          { name: 'Ciencias sociales (Historia y Conocimientos generales)' },
          { name: 'Ciencias exactas (Matemáticas y Física)' },
          { name: 'Lenguaje y comunicación' },]
      },
      {
        code: 'NOR',
        name: 'Escuelas Superiores de formación de maestros (ESFM) Normales',
        degrees: [
          { name: 'ESFM', courseTime: CareerTimeEnum.YEAR },
        ],
        courses: [
          { name: 'Con. Gen. de la realidad del país y del sistema educativo plurinacional' },
          { name: 'Comprensión lectora y razonamiento verbal' },
          { name: 'Razonamiento lógico matemático' },
          { name: 'Especialidad' },]
      },
      {
        code: 'MIL',
        name: 'Instituciones Militares y Policiales',
        degrees: [
          { name: 'Militares', courseTime: CareerTimeEnum.YEAR },
          { name: 'Policiales', courseTime: CareerTimeEnum.YEAR },
        ],
        courses: [
          { name: 'Matemáticas' },
          { name: 'Lenguaje' },
          { name: 'Química' },
          { name: 'Historia' },
          { name: 'Física' },
          { name: 'Geometría - Trigonometría' },
          { name: 'Psicotécnico' },
          { name: 'Cívica' },]
      },
    ];


    for (const data of faculties) {
      const existingFaculty = await this.facultyRepository.findOne({
        where: { code: data.code },
        relations: ['degrees'],
      });

      if (!existingFaculty) {
        const faculty = this.facultyRepository.create(data);
        await this.facultyRepository.save(faculty);
        console.log(`Facultad creada: ${data.name}`);
      } else {
        console.log(`Facultad omitida (ya existe): ${data.name}`);
      }
    }
  }
}