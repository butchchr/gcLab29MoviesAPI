using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using gcLab29MoviesAPI.Data.Maps;
using gcLab29MoviesAPI.Domain.Models;

namespace gcLab29MoviesAPI.Data
{
    public class Lab29Context : DbContext
    {
        public Lab29Context() : base("GCMovies")
        {

        }

        public DbSet<Movie> Movies { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new MovieMap());
            base.OnModelCreating(modelBuilder);
        }

    }
}
