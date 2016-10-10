using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AdminToolsAPI.Models;

namespace AdminToolsAPI.DAL
{
    public class DbInitializer : System.Data.Entity.CreateDatabaseIfNotExists<Context>
    {
        protected override void Seed(Context context)
        {
            var testModels = new List<TestModel>
            {
            new TestModel {Id = 0, Description = "Model 1 Desc", Name = "Igor"},
            new TestModel {Id = 1, Description = "Model 2 Desc", Name = "Masha"},
            new TestModel {Id = 3, Description = "Model 3 Desc", Name = "Pasha"},
            };

            testModels.ForEach(s => context.TestModels.Add(s));
            context.SaveChanges();
            
        }
    }
}