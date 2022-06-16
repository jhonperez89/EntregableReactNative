using APIMATRICULAS.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIMATRICULAS.Data
{
    
    
        public class AlumnoMatriculaContexto : DbContext
        {
            public AlumnoMatriculaContexto(
                DbContextOptions<AlumnoMatriculaContexto> options) : base(options)
            {

            }
            //Agregar nuestro DbSet

            public DbSet<Alumno_se_matricula_asignatura> Alumno_se_matricula_asignaturaItems { get; set; }



        }
    }

