using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace APIMATRICULAS.Models
{
    public class Asignatura
    {
        [Required]
        [Key]
        public int id { get; set; }
        [Required]
        public string nombre { get; set; }
        [Required]
        public int creditos { get; set; }
        [Required]
        public string tipo { get; set; }
        [Required]
        public int  curso { get; set; }
        [Required]
        public int cuatrimestre { get; set; }
        [Required]
        public int id_profesor { get; set; }
        [Required]
        public int id_grado { get; set; }
    }
}
