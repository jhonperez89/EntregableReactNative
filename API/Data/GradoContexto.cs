using APIMATRICULAS.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIMATRICULAS.Data
{
    
    
        public class GradoContexto : DbContext
        {
            public GradoContexto(
                DbContextOptions<GradoContexto> options) : base(options)
            {

            }
            //Agregar nuestro DbSet

            public DbSet<Grado> GradoItems { get; set; }



        }
    }

