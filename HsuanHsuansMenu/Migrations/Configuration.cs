namespace HsuanHsuansMenu.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using HsuanHsuansMenu.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<HsuanHsuansMenu.Models.HsuanHsuansMenuContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            ContextKey = "HsuanHsuansMenu.Models.HsuanHsuansMenuContext";
        }

        protected override void Seed(HsuanHsuansMenu.Models.HsuanHsuansMenuContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            context.Customers.AddOrUpdate(x => x.Id,
                new Customer() { Id=1, Name="Leo Li"},
                new Customer() { Id=2, Name="YiHsuan Lu"}
            );
        }
    }
}
