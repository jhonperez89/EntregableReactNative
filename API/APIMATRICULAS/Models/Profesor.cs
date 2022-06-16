using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace APIMATRICULAS.Models
{
    public class Profesor
    {
        [Key]
        public int id_profesor { get; set; }
        [Required]
        public int id_departamento { get; set; }

    }
}
