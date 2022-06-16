using APIMATRICULAS.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIMATRICULAS.Data
{
    
        public class PersonaContexto : DbContext
        {
            public PersonaContexto(
                DbContextOptions<PersonaContexto> options) : base(options)
            {

            }
            //Agregar nuestro DbSet

            public DbSet<Persona> PersonaItems { get; set; }



        }
    }

