using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using gcLab29MoviesAPI.Domain.Models;

namespace gcLab29MoviesAPI.Data.Maps
{
    class MovieMap :EntityTypeConfiguration<Movie>
    {
        public MovieMap()
        {
            HasKey(x => x.Id);
            Property(x => x.Id)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(254);
            Property(x => x.Category)
                .IsRequired()
                .HasMaxLength(254);
        }
    }
}
