using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIMATRICULAS.Models;

namespace APIMATRICULAS.Data
{
    public class ConjuntoDeDatosContexto : DbContext
    {
        public  ConjuntoDeDatosContexto(
           DbContextOptions<ConjuntoDeDatosContexto> option) : base(option)
        {

        }
   

    // Agregar nuestro DbSet

        public DbSet<Profesor> ProfesorItems { get; set; }

        public DbSet<Persona> PersonaItems { get; set; }

        public DbSet<Grado> GradoItems { get; set; }

        public DbSet<Departamento> DepartamentoItems { get; set; }

        public DbSet<Curso_escolar> Curso_escolarItems { get; set; }

        public DbSet<Asignatura> AsignaturaItems { get; set; }

        public DbSet<Alumno_se_matricula_asignatura> Alumno_se_matricula_asignaturaItems { get; set; }
    }
}
