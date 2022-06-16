using APIMATRICULAS.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIMATRICULAS.Data
{
    
    
        public class CursoContexto : DbContext
        {
            public CursoContexto(
                DbContextOptions<CursoContexto> options) : base(options)
            {

            }
            //Agregar nuestro DbSet

            public DbSet<Curso_escolar> Curso_escolarItems { get; set; }



        }
    }

