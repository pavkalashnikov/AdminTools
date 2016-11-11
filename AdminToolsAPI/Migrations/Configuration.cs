using System.Collections.Generic;
using AdminToolsAPI.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace AdminToolsAPI.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<AdminToolsAPI.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "AdminToolsAPI.Models.ApplicationDbContext";
        }

        protected override void Seed(ApplicationDbContext applicationDbContext)
        {

            var userManager = new ApplicationUserManager(new UserStore<ApplicationUser>(applicationDbContext));
            var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(applicationDbContext));

            var role1 = new IdentityRole { Name = "admin" };
            var role2 = new IdentityRole { Name = "user" };

            roleManager.Create(role1);
            roleManager.Create(role2);

            var admin = new ApplicationUser { Email = "admin@gmail.com", UserName = "admin@gmail.com" };
            string password = "qwaszx@1";
            var result = userManager.Create(admin, password);

            if (result.Succeeded)
            {
                userManager.AddToRole(admin.Id, role1.Name);
                userManager.AddToRole(admin.Id, role2.Name);
            }

            var testModels = new List<TestModel>
            {
            new TestModel {Id = 0, Description = "Model 1 Desc", Name = "Igor"},
            new TestModel {Id = 1, Description = "Model 2 Desc", Name = "Masha"},
            new TestModel {Id = 3, Description = "Model 3 Desc", Name = "Pasha"},
            };

            testModels.ForEach(s => applicationDbContext.TestModels.Add(s));
            applicationDbContext.SaveChanges();



        }
    }
}
