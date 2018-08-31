using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using gcLab29MoviesAPI.Domain.Models;


namespace gcLab29MoviesAPI.Data
{
    public class Lab29Initializer : DropCreateDatabaseIfModelChanges<Lab29Context>
    {
        protected override void Seed(Lab29Context context)
        {
            context.Movies.Add(new Movie()
            {
                Name = "Gone with the Wind",
                Category ="Drama"
            });

            context.Movies.Add(new Movie()
            {
                Name = "Gone with the Wind 2: Return of the Wind",
                Category = "Action"
            });

            context.Movies.Add(new Movie()
            {
                Name = "Howard the Duck",
                Category = "Bad"
            });

            context.Movies.Add(new Movie()
            {
                Name = "Mighty Ducks",
                Category = "Sports"
            });

            context.Movies.Add(new Movie()
            {
                Name = "Blazing Saddles",
                Category = "Comedy"
            });

            context.Movies.Add(new Movie()
            {
                Name = "History of the World Part II",
                Category = "Comedy"
            });

            context.Movies.Add(new Movie()
            {
                Name = "The Departed",
                Category = "Drama"
            });

            context.Movies.Add(new Movie()
            {
                Name = "Rouge One, A Star Wars Story",
                Category = "Action"
            });

            context.Movies.Add(new Movie()
            {
                Name = "Star Wars: Episode 1, The Phantom Menace",
                Category = "Bad"
            });

            context.Movies.Add(new Movie()
            {
                Name = "Air Bud",
                Category = "Sports"
            });

            context.Movies.Add(new Movie()
            {
                Name = "Hot Fuzz",
                Category = "Comedy"
            });

            context.Movies.Add(new Movie()
            {
                Name = "Fight Club 2: Still Don't Talk About It",
                Category = "Drama"
            });

            context.SaveChanges();
            base.Seed(context);
        }
    }
}
