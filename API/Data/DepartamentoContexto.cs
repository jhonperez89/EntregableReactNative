using APIMATRICULAS.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIMATRICULAS.Data
{
    
    
        public class DepartamentoContexto : DbContext
        {
            public DepartamentoContexto(
                DbContextOptions<DepartamentoContexto> options) : base(options)
            {

            }
            //Agregar nuestro DbSet

            public DbSet<Departamento> DepartamentoItems { get; set; }



        }
    }

