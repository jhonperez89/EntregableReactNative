using APIMATRICULAS.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIMATRICULAS.Data
{
    
    
        public class AsignaturaContexto : DbContext
        {
            public AsignaturaContexto(
                DbContextOptions<AsignaturaContexto> options) : base(options)
            {

            }
            //Agregar nuestro DbSet

            public DbSet<Asignatura> AsignaturaItems { get; set; }



        }
    }

