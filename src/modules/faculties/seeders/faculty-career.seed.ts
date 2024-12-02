// src/seeds/faculty-career.seeder.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faculty } from '../faculty.entity';

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
        careers: [
          { name: 'Ing. Industrial', courseTime: 'semestral' },
          { name: 'Ing. Mecánica', courseTime: 'semestral' },
          { name: 'Ing. Eléctrica', courseTime: 'semestral' },
          { name: 'Ing. Informática', courseTime: 'semestral' },
          { name: 'Ing. Electrónica' , courseTime: 'semestral'},
          { name: 'Ing. Sistemas', courseTime: 'semestral' },
          { name: 'Ing. Electromecánica', courseTime: 'semestral' },
          { name: 'Ing. Civil' , courseTime: 'semestral'},
          { name: 'Ing. Química' , courseTime: 'semestral'},
          { name: 'Ing. Alimentos', courseTime: 'semestral' },
          { name: 'Lic. Biología', courseTime: 'semestral' },
          { name: 'Lic. Química', courseTime: 'semestral' },
          { name: 'Lic. Matemáticas', courseTime: 'semestral' },
          { name: 'Lic. Física', courseTime: 'semestral' },
          { name: 'Ing. Biotecnología', courseTime: 'semestral' },
          { name: 'Ing. Energía', courseTime: 'semestral' },
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
        careers: [
          { name: 'Economía', courseTime: 'semestral' },
          { name: 'Contaduría pública', courseTime: 'semestral' },
          { name: 'Administración de empresas', courseTime: 'semestral' },
          { name: 'Ing. Comercial', courseTime: 'semestral' },
          { name: 'Ing. Financiera', courseTime: 'semestral' },
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
        careers: [
          { name: 'Ciencias de la educación', courseTime: 'semestral' },
          { name: 'Psicología' , courseTime: 'semestral'},
          { name: 'Lingüística', courseTime: 'semestral' },
          { name: 'Trabajo social', courseTime: 'semestral' },
          { name: 'Ciencias del deporte', courseTime: 'semestral' },
          { name: 'Técnico superior en Parvulario', courseTime: 'semestral' },
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
        careers: [
          { name: 'Agronomía', courseTime: 'semestral' },
          { name: 'Veterinaria', courseTime: 'semestral' },
          { name: 'Ing. Forestal', courseTime: 'semestral' },
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
        careers: [
          { name: 'Medicina', courseTime: 'anual' },
          { name: 'Fisioterapia', courseTime: 'semestral' },
          { name: 'Nutrición', courseTime: 'semestral' },
          { name: 'Enfermería', courseTime: 'anual' },
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
        careers: [{ name: 'Odontología', courseTime: 'anual' }],
        courses: [
          { name: 'Química' },
          { name: 'Biología' },
          { name: 'Lenguaje' },
        ]
      },
      {
        code: 'BIOQ',
        name: 'Bioquímica',
        careers: [{ name: 'Bioquímica', courseTime: 'anual' }],
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
        careers: [
          { name: 'Derecho', courseTime: 'anual' },
          { name: 'Ciencia política', courseTime: 'anual' },
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
        careers: [
          { name: 'Arquitectura', courseTime: 'anual' },
          { name: 'Turismo', courseTime: 'anual' },
          { name: 'Diseño gráfico', courseTime: 'anual' },
          { name: 'Diseño de interiores', courseTime: 'anual' },
          { name: 'Planificación de territorio y medio ambiente', courseTime: 'anual' },
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
        careers: [
          { name: 'ESFM', courseTime: 'anual' },
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
        careers: [
          { name: 'Militares', courseTime: 'anual' },
          { name: 'Policiales', courseTime: 'anual' },
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
        relations: ['careers'],
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